var products = [];
var showPerPage ="";
var numberOfItems="";
var numberOfPages="";
var paginationHtml="";
var currentLink ="";
var sta="";
var limit="";
$.getJSON('./products.json', function(data) {
	  
	  products = data;
	  showPerPage = 24;
	  numberOfItems = products.length; //getting and declaring the total number of json data in a array
      //console.log(numberOfItems);
      numberOfPages = Math.ceil(numberOfItems/showPerPage); //calculating total number of pages
      //console.log(numberOfPages);
      limit = showPerPage;
      //console.log(limit);
      sta = 0;
      goFun(sta,limit);
      pagination();
});


function goFun(sta,limit) {
	for (var i =sta ; i < limit; i++) {
    
    	var output = "<div class='col-md-4 col-sm-6 col-lg-3 col-xs-12 result'>" +
                           "<div class='thumbnail product'>"+
                                "<a href='#'>"+
                                    "<img class='product-image'" + " " + "src='" + products[i].image + "'>"+
                                "</a>"+
                                 "<span class='sale-percentage'>"+
                                  "<b>"+ products[i].sale_percentage+"%"+"</b>"+
                                "</span>"+
                                "<img class='upcoming_image' src='http://www.textilebuzz.com/image/icons/upcoming.png' alt=''>"+
                                "<div class='caption'>"+
                                "<h3 class='product-caption'>"+ products[i].name +
                                "<p class='product-model'>"+products[i].model+"</p>"+
                                "<ul class='list-inline price'>"+
                                "<li>"+
                                "<p class='price-old'>"+"INR"+" "+products[i].price_old+"</p"+
                                "</li>"+
                                "<li>"+
                                "<p class='price-new'>"+"INR"+" "+products[i].price_new+"</p"+
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
    
  }
}
 function pagination() {

 	  paginationHtml = "<li><a href='javascript:previous();'>&lt;</a></li>"
            currentLink = 0;
             while(numberOfPages > currentLink){
             paginationHtml += '<li><a class="" href="javascript:goToPage(' + currentLink +')">'+ (currentLink + 1) +'</a></li>';
             currentLink++;
             console.log(currentLink);
            }
            paginationHtml += '<li><a href="javascript:next();">&gt;</a></li>';
            $('#pagination').html(paginationHtml);
 	
 }

function next(){
  
	var next = limit;
	console.log(next);
	if(numberOfItems>=next) {
	limit = limit+showPerPage;
	console.log(limit);
	$('#placeholder').empty();
	goFun(next,limit);
	}
  }
   function previous() {
	var pre = limit-(2*showPerPage);
	console.log(pre);
	if(pre>=0) {
	limit = limit-showPerPage;
	console.log(limit)
	$('#placeholder').empty();
	goFun(pre,limit); 
	}
  }	
  function goToPage(pageNum) {
  	// body...
  	var goToPage = limit;
  	console.log(goToPage);
  	startFrom = pageNum * limit;
  	console.log(startFrom);
  	endTo = startFrom + limit;
  	console.log(endTo);
  	$('#placeholder').empty();
  	goFun(startFrom,endTo);
  }
function productsFilter() {
	 // body...
	 var kurti = $(products).filter(function(index) {
	 	return products[index].type == "kurti";
	 });
	 console.log(kurti);
	 numberOfItems = kurti.length;
	 numberOfPages = Math.ceil(numberOfItems/limit);
   	 limit = limit;
   	 goFun(sta,limit);
   	 pagination();
}