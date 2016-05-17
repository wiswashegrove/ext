jQuery(document).ready(function(){
	if(jQuery("#amazon_scrap_buy_now_button").length === 0)
	{
		
		$addtocart = jQuery("#add-to-cart-button").parents(".a-button-stack");
		$addtocart.after('<button style="background: #00adee;border: 1px solid #00adee; width: 100%; height: 40px;text-align: center;color: #FFF;padding: 0;border-radius: 5px;display: block; text-transform: uppercase;font-weight: 700;font-size: 18px; cursor: pointer" type="button" title="Add to Cart" id="amazon_scrap_buy_now_button" class="button btn-cart"><span style="line-height: 40px;">buy from<img style="height: 24px;margin-left: 10px;background: #fff;padding: 4px 8px;border-radius: 5px;border: 1px solid #06678C;box-shadow: 0 0px 5px rgba(0,0,0,0.25);vertical-align: middle;position: relative;margin-top: -4px;" src="http://d1fkxfqilmmnbi.cloudfront.net/skin/frontend/vivima/default/images/logo.png"/></span></button>');
		//$addtocart.next().find("#add-to-cart-button").attr("id", "amazon_scrap_buy_now_button");
		//jQuery("#amazon_scrap_buy_now_button").next().text("Buy From vivima");
        //jQuery("#amazon_scrap_buy_now_button").next().css({'background':'#00adee', 'border':'1px solid #00adee', 'color':'#fff'});

		jQuery("#amazon_scrap_buy_now_button").click(function(){
			
			jQuery.post("http://webform.opentestdrive.com/products/details/", {html: jQuery("body").html()})
                .success(function(response){
					console.log(response);
                    window.location.href = 'http://webform.opentestdrive.com/products/details/'+response.product_key;
				})
				.error(function(err){
					console.log(err);
				});
			return false;
		});
	}
});
