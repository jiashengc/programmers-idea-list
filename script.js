$(document).ready(function() {
    
    var prevtype = "", prevdur = "";
    var typeSelect = "", durationSelect = "";
    var initialize = false, listvsgrid = true;
    var ideas = $(".list li").length;
    
    $(".totalIdeas").append(ideas);
    
    $(".listChoose").click(function() {
        if (!$(this).hasClass("listVsGridChosen")) {
            $(".gridChoose").removeClass("listVsGridChosen");
            $(this).addClass("listVsGridChosen");
            
            $(".list li").each(function() {
                $(this).removeClass("liGrid").addClass("liList");
            });
        }
    });
    
    $(".gridChoose").click(function() {
        if (!$(this).hasClass("listVsGridChosen")) {
            $(".listChoose").removeClass("listVsGridChosen");
            $(this).addClass("listVsGridChosen");
            
            $(".list li").each(function() {
                $(this).removeClass("liList").addClass("liGrid");
            });
        }
    });
    
    $(".typeChoose").delegate("div", "click", function() {
        if(!$(this).hasClass("typeSelected")) {
            typeSelect = $(this).text().toLowerCase();
            typeSelect = typeSelect.charAt(0).toUpperCase() + typeSelect.slice(1);

            if (typeSelect == "All") {
                typeSelect = "";
            }

            $(".typeChoose .typeButton").removeClass("typeSelected");
            $(this).addClass("typeSelected");

            changeType(typeSelect, durationSelect);
        }

    });
    
    $(".durationChoose").delegate("div", "click", function() {
        if (!$(this).hasClass("typeSelected")) {
            durationSelect = $(this).text().toLowerCase();
            durationSelect = durationSelect.charAt(0).toUpperCase() + durationSelect.slice(1);

            if (durationSelect == "All") {
                durationSelect = "";
            }

            $(".durationChoose .typeButton").removeClass("typeSelected");
            $(this).addClass("typeSelected");

            changeType(typeSelect, durationSelect);
        }   
    });
    
    function changeType(type, dur) {
        console.log("Type: " + type);
        console.log("Dur: " + dur);
        
        var i = 1;
        if (initialize) {
            $(".list li").addClass("animated fadeOut");
        }
        
        setTimeout(function() {
            
            if ((!type && type != prevtype) && (!dur && dur != prevdur) || !initialize) {
                $(".list li").each(function(index) {
                    $(this).removeClass("ghosting fadeOut").addClass("fadeIn");
                    if (i % 2 != 0) {
                        $(this).addClass("nonghost");
                    } else {
                        $(this).removeClass("nonghost");
                    }
                    i+=1;
                });
                prevtype = type;
                prevdur = dur;
                initialize = true;
            }
            else if ((type != prevtype || dur != prevdur)) {
                $(".list li").each(function(index) {
                    
                    console.log($(this).find(".type").text().indexOf(type) >= 0 && $(this).find(".duration").text().indexOf(dur) >= 0);
                    console.log($(this).find(".type").text().indexOf(type) >= 0);
                    console.log($(this).find(".duration").text().indexOf(dur) >= 0)
                    
                    if ($(this).find(".type").text().indexOf(type) >= 0 && $(this).find(".duration").text().indexOf(dur) >= 0) {
                        $(this).removeClass("ghosting fadeOut").addClass("fadeIn");
                        if (i % 2 != 0) {
                            $(this).addClass("nonghost");
                        } else {
                            $(this).removeClass("nonghost");
                        }
                        i+=1;
                    }
                    else {
                        $(this).removeClass("fadeIn").addClass("fadeOut");
                    }
                });

                $(".fadeOut").addClass("ghosting");
                prevtype = type;
                prevdur = dur;
            }
        }, 500);
    }  // End of changeType() Function
    
    changeType(typeSelect, durationSelect);
    
});