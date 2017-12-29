/**
 * Created by lili on 2017/12/27.
 * checkbox radio
 *
 */
(function ($,window) {
    //如果用seajs等就在包裹一层请求
   /* define( 'xxx/common/lib/dmChoiceBox', function( require, exports, module ){*/
        ;if('undefined' === typeof jQuery) throw new Error('dmChoiceBox’s JavaScript require jQuery');
        +function ($,window) {
            var ChoiceBox = function (element,options) {//{type:checkbox/radio,attr:'index'}
                this.element = element;
                this.type = options.type || '';
                this.attr = options.attr || 'value';//获取属性值
                if(!this.type) return;
                if(this.type == 'checkbox'){
                    $(this.element)
                        .on('click.dm.choice','[data-check]',$.proxy(this.toggle, this))
                }
                if(this.type == 'radio'){
                    $(this.element)
                        .on('click.dm.choice','[data-radio]',$.proxy(this.toggle, this))
                }
                return this;
            }
            ChoiceBox.prototype.toggle = function (e) {
                var that = this;
                that.$element = $(e.target || e.srcElement)[0];
                var checkType = $(that.$element).data('check');
                var radioType = $(that.$element).data('radio');
                if($(that.$element).parent().find('input:disabled').length) return;
                if(checkType){
                    that.checkType = checkType;
                    setTimeout(function () {
                        that.checkBox();
                    },50)

                }
                if(radioType){//radio
                    setTimeout(function () {
                        that.radioBox();
                    },50)
                }
                return that;
            }
            ChoiceBox.prototype.radioBox = function () {
                var that = this;
                that.radioBoxChange();
                return that;
            }
            ChoiceBox.prototype.checkBox = function (){
                var that = this;
                var checkDom = $(that.element).find('[data-check="one"]').parent().find('input:not(:disabled)'),
                    checkAllDom = $(that.element).find('[data-check="all"]');
                var isAllChecked = function () {
                    var checkNum = checkDom.length,checkedNum = checkDom.filter(':checked').length;
                       checkAllDom.parent().find('input:checkbox').prop("checked",(checkNum == checkedNum));
                };
                switch (that.checkType){
                    case 'one':
                        isAllChecked();
                        break;
                    case 'all':
                        if(checkAllDom.parent().find('input:checkbox:checked').length){
                            checkDom.prop("checked",true);
                        }else{
                            checkDom.prop("checked",false);
                        }
                        //全选后反选要去除
                        $(that.element).find('[data-check="allinverse"]').parent().find('input:checkbox').prop('checked',false);
                        //isAllChecked();
                        break;
                    case 'allinverse':
                        checkDom.each(function (i) {
                                $(this).prop("checked",(!this.checked));
                        })
                        isAllChecked();
                        break;
                    case 'defaultall':
                        checkDom.prop("checked",true);
                        isAllChecked();
                        break;
                        break;
                    case 'defaultclean':
                        checkDom.prop("checked",false);
                        $(that.element).find('[data-check="allinverse"]').parent().find('input:checkbox').prop('checked',false);
                        isAllChecked();
                        break;
                    default:''
                }
                that.checkBoxChange();
                return that;
            }
            ChoiceBox.prototype.checkBoxChange = function(){
                var that = this;
                var _attr = this.attr;
                var _cache = [],_cacheChecked = [];
                $(this.element).find('[data-check="one"]').parent().find('input:not(:disabled)').each(function (i) {
                    var _obj = {}, isChecked = this.checked;
                    if(_attr){
                        _obj[$(this).attr(_attr)] = isChecked;
                        if(isChecked) _cacheChecked.push($(this).attr(_attr));
                    }else{
                        _obj[i] =  isChecked;
                        if(isChecked) _cacheChecked.push(i);
                    }
                    _cache.push(_obj);
                });
                var e = $.Event('change.dm.choice', { checkCollect: _cache,checkedCollect:_cacheChecked,$element:$(this.$element).parent().find('input')});
                $(this.element).trigger(e)
            }
            ChoiceBox.prototype.radioBoxChange = function(){
                var _attr = this.attr,_cache = '';
                if(_attr) _cache = $(this.$element).parent().find('input:not(:disabled)').attr(_attr);
                var e = $.Event('change.dm.choice', { checkedCollect: _cache,$element:$(this.$element).parent().find('input')});
                $(this.element).trigger(e)
                return this;
            }
            ChoiceBox.prototype.choiceAll = function(){
                var that = this;
                if(this.type == 'checkbox'){
                    setTimeout(function () {
                        that.checkType = 'defaultall';
                        that.checkBox();
                    },10);
                }
                return this;
            }
            ChoiceBox.prototype.cleanAll = function(){
                var that = this;
                if(this.type == 'checkbox'){
                    setTimeout(function () {
                        that.checkType = 'defaultclean';
                        that.checkBox();
                    },10);
                }
                return this;
            }
            function Plugin(opt) {
                return this.each(function (  )  {
                    var $this = $(this);
                    var data  = $this.data('dm.choice');
                    var options = $.extend({}, typeof opt == 'object' && opt)
                    if (!data) $this.data('dm.choice', (data = new ChoiceBox(this,options)))
                    if (typeof opt == 'string') data[opt]();
                })
            }
            $.fn.choicebox = Plugin
        }(jQuery,window);
   /* });*/
})(jQuery,window);
