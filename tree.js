/**
 * @fileOverview: tree.js 树形菜单
 * @author: tianxiaoyun 
 * @contact: email misstian2008@163.com || 358926040
 * @version: 1.0
 * @external: [jquery.js]
 */
;(function($,window,document,undefined){
	var Tree = function(eleId,opt){
			this.element = $(eleId);
			this.defaults = {
				'child':'li',
				'targetElement':'a',
				'defaultsMode':'show'
			};
			this.options = $.extend({}, this.defaults, opt);
	}

	Tree.prototype = {
		init:function(){
			this.modifiedStyle();
			this.bindEvent();
		},
		/**
         * [修饰样式]
         */
        modifiedStyle:function(){
        	var _this = this;

        	_this.element.find(_this.options.child).each(function(){
        		if($(this).find(_this.options.child).length > 0){
        			if(_this.options.defaultsMode === 'show'){
        				$(this).children(_this.options.targetElement).addClass('plus minus');
        			}else{
        				$(this).height('20px');
        				$(this).children(_this.options.targetElement).addClass('plus');
        			}
        			
        		}
        	});
        },
        /**
         * [邦定事件]
         * @return {[type]} [description]
         */
        bindEvent:function(){
        	var _this = this;
        	_this.element.find(_this.options.targetElement+'.plus').on('click',function(){
        		if($(this).is('.minus')){
        			$(this).parent().height('20px');
        			$(this).removeClass('minus');
        		}else{
        			$(this).parent().height('auto');
        			$(this).addClass('minus');
        		}
        	});
        }
	}
	//在插件中使用Cycle对象
    $.fn.tree = function(options) {
        //创建Cycle的实体
        var tree = new Tree(this, options);
        //调用其方法
        return tree.init();
    }

})(jQuery,window,document);

