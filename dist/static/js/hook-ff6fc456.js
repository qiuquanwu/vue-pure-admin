import{m as b}from"./message-19a66385.js";import{b as V}from"./system-90157bd5.js";import"./index-1d030a9b.js";function W(){const o=Vue.reactive({username:"",mobile:"",status:""}),i=Vue.ref([]),n=Vue.ref(!0),a=Vue.ref({}),r=Vue.reactive({total:0,pageSize:10,currentPage:1,background:!0}),s=[{type:"selection",width:55,align:"left",hide:({checkList:e})=>!e.includes("\u52FE\u9009\u5217")},{label:"\u5E8F\u53F7",type:"index",width:70,hide:({checkList:e})=>!e.includes("\u5E8F\u53F7\u5217")},{label:"\u7528\u6237\u7F16\u53F7",prop:"id",minWidth:130},{label:"\u7528\u6237\u540D\u79F0",prop:"username",minWidth:130},{label:"\u7528\u6237\u6635\u79F0",prop:"nickname",minWidth:130},{label:"\u6027\u522B",prop:"sex",minWidth:90,cellRenderer:({row:e,props:t})=>Vue.createVNode(Vue.resolveComponent("el-tag"),{size:t.size,type:e.sex===1?"danger":"",effect:"plain"},{default:()=>[e.sex===1?"\u5973":"\u7537"]})},{label:"\u90E8\u95E8",prop:"dept",minWidth:90,formatter:({dept:e})=>e.name},{label:"\u624B\u673A\u53F7\u7801",prop:"mobile",minWidth:90},{label:"\u72B6\u6001",prop:"status",minWidth:90,cellRenderer:e=>{var t;return Vue.createVNode(Vue.resolveComponent("el-switch"),{size:e.props.size==="small"?"small":"default",loading:(t=a.value[e.index])==null?void 0:t.loading,modelValue:e.row.status,"onUpdate:modelValue":v=>e.row.status=v,"active-value":1,"inactive-value":0,"active-text":"\u5DF2\u5F00\u542F","inactive-text":"\u5DF2\u5173\u95ED","inline-prompt":!0,onChange:()=>c(e)},null)}},{label:"\u521B\u5EFA\u65F6\u95F4",minWidth:90,prop:"createTime",formatter:({createTime:e})=>dayjs(e).format("YYYY-MM-DD HH:mm:ss")},{label:"\u64CD\u4F5C",fixed:"right",width:180,slot:"operation"}],u=Vue.computed(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function c({row:e,index:t}){ElementPlus.ElMessageBox.confirm(`\u786E\u8BA4\u8981<strong>${e.status===0?"\u505C\u7528":"\u542F\u7528"}</strong><strong style='color:var(--el-color-primary)'>${e.username}</strong>\u7528\u6237\u5417?`,"\u7CFB\u7EDF\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning",dangerouslyUseHTMLString:!0,draggable:!0}).then(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!0}),setTimeout(()=>{a.value[t]=Object.assign({},a.value[t],{loading:!1}),b("\u5DF2\u6210\u529F\u4FEE\u6539\u7528\u6237\u72B6\u6001",{type:"success"})},300)}).catch(()=>{e.status===0?e.status=1:e.status=0})}function d(e){}function m(e){}function p(e){}function g(e){}function h(e){}async function l(){n.value=!0;const{data:e}=await V();i.value=e.list,r.total=e.total,setTimeout(()=>{n.value=!1},500)}const f=e=>{!e||(e.resetFields(),l())};return Vue.onMounted(()=>{l()}),{form:o,loading:n,columns:s,dataList:i,pagination:r,buttonClass:u,onSearch:l,resetForm:f,handleUpdate:d,handleDelete:m,handleSizeChange:p,handleCurrentChange:g,handleSelectionChange:h}}export{W as useUser};
