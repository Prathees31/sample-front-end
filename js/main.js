var products = [];


$( document ).ready(function() {

    
    $.getJSON('./products.json', function(data) {
        products = data;
        var output = " ";
        $.each(data, function(index, value,key) {
            console.log(index);
            console.log(value);
            console.log(key);
        output = "<div class='col-md-3 result'>" +
                           "<div class='thumbnail product'>"+
                                "<a href='#'>"+
                                    "<img" + " " + "src='" + this.image + "'>"+
                                "</a>"+
                                 "<span class='sale-percentage'>"+
                                  "<b>"+ this.sale_percentage+"%"+"</b>"+
                                "</span>"+
                                "<img class='upcoming_image' src='http://www.textilebuzz.com/image/icons/upcoming.png' alt=''>"+
                                "<div class='caption'>"+
                                "<h3 class='product-caption'>"+ this.name +
                                "<p class='product-model'>"+this.model+"</p>"+
                                "<ul class='list-inline price'>"+
                                "<li>"+
                                "<p class='price-old'>"+"INR"+" "+this.price_old+"</p"+
                                "</li>"+
                                "<li>"+
                                "<p class='price-new'>"+"INR"+" "+this.price_new+"</p"+
                                "</li>"+
                                "</ul>"+
                                "</div>"+
                                "<div class='product-cart'>"+
                                "<p class='text-center'>"+
                                "<a href='#' class='btn btn-default cart-button' role='button'>"+
                                "<i class='fa fa-shopping-cart cart-symbol' aria-hidden='true'>"+"</i>"+" "+" "+
                                "Add to Cart"+"</a>"+"</p>"+
                                "</div>"+
                                "</div>"+
                                "</div>";
          $('#placeholder').append(output);
          if (index == 23 ) {
            return false;
          }
});        
var result = $('.result').length;
console.log(result);
var output2 = "<p class='pull-right result-page'>"+"showing "+result+" of" + " "+data.length;
$('#pagination').append(output2);       
});
});
