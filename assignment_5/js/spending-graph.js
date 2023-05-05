function createBarChart (data) {
    // Start with the container.
    var chart = document.createElement("div");
    
    // The container must have position: relative.
    chart.style.position = "relative";
    
    // The chart's height is the value of its largest
    // data item plus a little margin.
    var height = 0;
    for (var i = 0; i < data.length; i += 1) {
        height = Math.max(height, data[i].value);
    }
    chart.style.height = (height + 1000) + "px";
    
    // Give the chart a bottom border.
    chart.style.borderBottomStyle = "solid";
    chart.style.borderBottomWidth = "1px";

    // Iterate through the data.
    var barPosition = 60;
    
    // We have a preset bar width
    var barWidth = 50;
    for (i = 0; i < data.length; i += 1) {
        // Basic column setup.
        var dataItem = data[i];
        var bar = document.createElement("div");
        bar.setAttribute("class", "chartBars");
        bar.style.position = "absolute";
        bar.style.left = barPosition + "px";
        bar.style.width = barWidth + "px";
        bar.style.backgroundColor = dataItem.color;
        bar.style.height = dataItem.value + "px";
        bar.style.borderStyle = "ridge";
        bar.style.borderColor = dataItem.color;
        
        // Visual flair with CSS Level 3 (for maximum compatibility
        bar.style.MozBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.WebkitBoxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.boxShadow = "rgba(128, 128, 128, 0.75) 0px 7px 12px";
        bar.style.MozBorderRadiusTopleft = "8px";
        bar.style.WebkitBorderTopLeftRadius = "8px";
        bar.style.borderTopLeftRadius = "8px";
        bar.style.MozBorderRadiusTopright = "8px";
        bar.style.WebkitBorderTopRightRadius = "8px";
        bar.style.borderTopRightRadius = "8px";
        bar.style.backgroundImage = 
            "-moz-linear-gradient(" + dataItem.color + ", black)";
        bar.style.backgroundImage = 
            "-webkit-gradient(linear, 0% 0%, 0% 100%," +
            "color-stop(0, " + dataItem.color + "), color-stop(1, black))";
        bar.style.backgroundImage =
            "linear-gradient(" + dataItem.color + ", black)";

        // Recall that positioning properties are treated *relative*
        // to the corresponding sides of the containing element.
        bar.style.bottom = "0px";
        chart.appendChild(bar);
        
        // Move to the next bar.  We provide an entire bar's
        // width as space between columns.
        barPosition += (barWidth * 2);
    }
    
    return chart;

   
    
};


window.onload = function () {
    var data = [{ color: "#829b9e", value: 2005.00 },
          { color: "#474747", value: 1471.31 },
          { color: "#c9dcde", value: 892.86 },
          { color: "#c9cbde", value: 531.60 },
          { color: "#4d7d60", value: 1646.00 },
          { color: "#4d538f", value: 179.52 }

    ];
    
    var chart = createBarChart(data);
    document.body.appendChild(chart);


};
document.getElementById("reset").addEventListener("click", function() {
    for (j = 0; j < data.length; j++){
         bar.style.height = "0px";
     }
 })