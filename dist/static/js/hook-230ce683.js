import{aj as c}from"./index-1d030a9b.js";import{g as p}from"./system-90157bd5.js";function h(){const i=Vue.reactive({user:"",status:""}),n=Vue.ref([]),t=Vue.ref(!0),l=[{type:"selection",width:55,align:"left",hide:({checkList:e})=>!e.includes("\u52FE\u9009\u5217")},{label:"\u5E8F\u53F7",type:"index",minWidth:70,hide:({checkList:e})=>!e.includes("\u5E8F\u53F7\u5217")},{label:"\u90E8\u95E8\u540D\u79F0",prop:"name",width:180,align:"left"},{label:"\u6392\u5E8F",prop:"sort",minWidth:70},{label:"\u72B6\u6001",prop:"status",minWidth:100,cellRenderer:({row:e,props:d})=>Vue.createVNode(Vue.resolveComponent("el-tag"),{size:d.size,type:e.status===1?"danger":"success",effect:"plain"},{default:()=>[e.status===0?"\u5173\u95ED":"\u5F00\u542F"]})},{label:"\u521B\u5EFA\u65F6\u95F4",minWidth:200,prop:"createTime",formatter:({createTime:e})=>dayjs(e).format("YYYY-MM-DD HH:mm:ss")},{label:"\u5907\u6CE8",prop:"remark",minWidth:200},{label:"\u64CD\u4F5C",fixed:"right",width:160,slot:"operation"}];function o(e){}function r(e){}function s(e){}function u(e){!e||(e.resetFields(),a())}async function a(){t.value=!0;const{data:e}=await p();n.value=c(e),setTimeout(()=>{t.value=!1},500)}return Vue.onMounted(()=>{a()}),{form:i,loading:t,columns:l,dataList:n,onSearch:a,resetForm:u,handleUpdate:o,handleDelete:r,handleSelectionChange:s}}export{h as useDept};
