# dmChoiceBox 1.0
# auth lily
API:
      $('#demo').choicebox({type:'checkbox',attr:'value'}).on('change.dm.choice',function (data) {
                                    console.log(data);
      });

    $('#demo').choicebox({type:'radio',attr:'value'}).on('change.dm.choice',function (data) {
    console.log(data.checkCollect);
    });
     type:checkbox/radio

     attr:需要的数据绑定的节点名称 默认：value
     data.checkedCollect:选中的数据
     按钮触发 清空和全部选中
      $('#demo').choicebox('choiceAll');
       $('#demo').choicebox('cleanAll');
dom 第一种

 <div class="checkbox-inline" >
  <input type="checkbox"    id="checkbox2" >
   <label for="checkbox2"  data-check="allinverse">反选</label>
    </div>
<div class="checkbox-inline">
 <input type="checkbox" id="th1">
  <label for="th1"  data-check="all"></label>
  </div>

    bootstrap：
    <label class="checkbox-inline">
     <input type="checkbox" data-check="allinverse">反选
      </label>