$("#customForm").bootstrapValidator({message:"",submitHandler:function(){},fields:{customcontent:{selector:".customcontent",validators:{notEmpty:{message:"请填写您的宝贵意见"},stringLength:{max:500,message:"抱歉，内容不能超过500字"}}}}});