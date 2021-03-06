$(function(){

})

// 编辑
function edit(id,pid){
  console.log(id,pid);
  window.location.href = "/admin/goodsCategory/add/id/"+id+"/pid/"+pid;
}

// 删除
function del(id){
  swal({
    title: "确认删除吗?",
    text: "删除后无法恢复!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    closeOnConfirm: false,
    closeOnCancel: false
  },
  function(isConfirm){
    if (isConfirm) {
      // Ajax
      $.ajax({
        type: "GET",
        url: "/admin/goodsCategory/del/id/"+id,
        dataType: "JSON",
        success: function(res){
          if (res.code == 200) {
            swal("提交成功", res.msg, "success");
            window.setTimeout("window.location.reload();",2000);
          } else {
            swal("提交失败", res.msg, "error");
          }
        },
        error: function(e){
          console.log(e);
          swal("未知错误", "请尝试刷新页面后重试 :(", "error");
        }
      });
    } else {
      swal("取消了", "数据是安全的 :)", "error");
    }
  });
}

// 添加商品
function addGoods(type,gcid){
  window.location.href = "/admin/goods/add/type/"+type+"/gcid/"+gcid;
}

// 商品列表
function indexGoods(type,gcid){
  window.location.href = "/admin/goods/index/type/"+type+"/gcid/"+gcid;
}

// 添加子集
function addSubset(pid){
  console.log(pid);
  window.location.href = "/admin/goodsCategory/add/pid/"+pid;
}

// 子集类别列表
function indexSubset(type,pid){
  console.log(pid);
  window.location.href = "/admin/goodsCategory/index/type/"+type+"/pid/"+pid;
}