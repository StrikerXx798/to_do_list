(this["webpackJsonptodolist-ts"]=this["webpackJsonptodolist-ts"]||[]).push([[0],{102:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(9),o=a.n(i);a(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(79);var r,l,s=a(137),u=a(138),d=a(132),f=a(140),m=a(135),O=a(141),b=a(139),T=a(21),k=a(8),E=a(42),v=a(59),j=a.n(v).a.create(Object(k.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"cfaface2-28da-4d76-88dc-dbbe029d9acd"}})),h=function(){return j.get("todo-lists")},p=function(t){return j.post("todo-lists",{title:t})},g=function(t){return j.delete("todo-lists/".concat(t))},I=function(t,e){return j.put("todo-lists/".concat(t),{title:e})},C=function(t){return j.get("todo-lists/".concat(t,"/tasks"))},S=function(t,e){return j.delete("todo-lists/".concat(t,"/tasks/").concat(e))},D=function(t,e){return j.post("todo-lists/".concat(t,"/tasks"),{title:e})},y=function(t,e,a){return j.put("todo-lists/".concat(t,"/tasks/").concat(e),a)};!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(l||(l={}));var L=[],A=a(22),w={},F=function(t,e,a){return function(n,c){var i=c().tasks[a].find((function(e){return e.id===t}));if(i){var o=Object(k.a)({deadline:i.deadline,description:i.description,priority:i.priority,startDate:i.startDate,title:i.title,status:i.status},e);y(a,t,o).then((function(c){var i=function(t,e,a){return{type:"UPDATE-TASK",model:e,todolistId:a,taskId:t}}(t,e,a);n(i)}))}else console.warn("task not found in the state")}},N=a(136),K=a(103),x=a(31),R=a(142),M=a(133),H=c.a.memo((function(t){console.log("AddItemForm called");var e=Object(n.useState)(""),a=Object(x.a)(e,2),i=a[0],o=a[1],r=Object(n.useState)(null),l=Object(x.a)(r,2),s=l[0],u=l[1],f=function(){""!==i.trim()?(t.addItem(i),o("")):u("Title is required")};return c.a.createElement("div",null,c.a.createElement(R.a,{variant:"outlined",error:!!s,value:i,onChange:function(t){o(t.currentTarget.value)},onKeyPress:function(t){null!==s&&u(null),13===t.charCode&&f()},label:"Title",helperText:s}),c.a.createElement(d.a,{color:"primary",onClick:f},c.a.createElement(M.a,null)))})),P=c.a.memo((function(t){console.log("EditableSpan called");var e=Object(n.useState)(!1),a=Object(x.a)(e,2),i=a[0],o=a[1],r=Object(n.useState)(t.value),l=Object(x.a)(r,2),s=l[0],u=l[1];return i?c.a.createElement(R.a,{value:s,onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.onChange(s)}}):c.a.createElement("span",{onDoubleClick:function(){o(!0),u(t.value)}},t.value)})),U=a(134),V=a(143),G=c.a.memo((function(t){var e=Object(n.useCallback)((function(){return t.removeTask(t.task.id,t.todolistId)}),[t.task.id,t.todolistId]),a=Object(n.useCallback)((function(e){var a=e.currentTarget.checked;t.changeTaskStatus(t.task.id,a?r.Completed:r.New,t.todolistId)}),[t.task.id,t.todolistId]),i=Object(n.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.task.id,t.todolistId]);return c.a.createElement("div",{key:t.task.id,className:t.task.status===r.Completed?"is-done":""},c.a.createElement(V.a,{checked:t.task.status===r.Completed,color:"primary",onChange:a}),c.a.createElement(P,{value:t.task.title,onChange:i}),c.a.createElement(d.a,{onClick:e},c.a.createElement(U.a,null)))})),B=c.a.memo((function(t){console.log("Todolist called");var e=Object(T.b)();Object(n.useEffect)((function(){var a,n=(a=t.id,function(t){C(a).then((function(e){var n=function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,a);t(n)}))});e(n)}),[]);var a=Object(n.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),i=Object(n.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.id,t.changeTodolistTitle]),o=Object(n.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.id,t.changeFilter]),l=Object(n.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.id,t.changeFilter]),s=Object(n.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.id,t.changeFilter]),u=t.tasks;return"active"===t.filter&&(u=t.tasks.filter((function(t){return t.status===r.New}))),"completed"===t.filter&&(u=t.tasks.filter((function(t){return t.status===r.Completed}))),c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(P,{value:t.title,onChange:i}),c.a.createElement(d.a,{onClick:function(){t.removeTodolist(t.id)}},c.a.createElement(U.a,null))),c.a.createElement(H,{addItem:a}),c.a.createElement("div",null,u.map((function(e){return c.a.createElement(G,{key:e.id,task:e,todolistId:t.id,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,changeTaskStatus:t.changeTaskStatus})}))),c.a.createElement("div",{style:{paddingTop:"10px"}},c.a.createElement(m.a,{variant:"all"===t.filter?"outlined":"text",onClick:o,color:"default"},"All"),c.a.createElement(m.a,{variant:"active"===t.filter?"outlined":"text",onClick:l,color:"primary"},"Active"),c.a.createElement(m.a,{variant:"completed"===t.filter?"outlined":"text",onClick:s,color:"secondary"},"Completed")))})),J=function(){var t=Object(T.c)((function(t){return t.todolists})),e=Object(T.c)((function(t){return t.tasks})),a=Object(T.b)();Object(n.useEffect)((function(){var t=function(t){h().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data})}))};a(t)}),[]);var i=Object(n.useCallback)((function(t,e){var n=function(t,e){return function(a){S(e,t).then((function(n){var c=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(t,e);a(c)}))}}(t,e);a(n)}),[]),o=Object(n.useCallback)((function(t,e){var n=function(t,e){return function(a){D(e,t).then((function(t){var e=function(t){return{type:"ADD-TASK",task:t}}(t.data.data.item);a(e)}))}}(t,e);a(n)}),[]),r=Object(n.useCallback)((function(t,e,n){var c=F(t,{status:e},n);a(c)}),[]),l=Object(n.useCallback)((function(t,e,n){var c=F(t,{title:e},n);a(c)}),[]),s=Object(n.useCallback)((function(t,e){var n={type:"CHANGE-TODOLIST-FILTER",id:e,filter:t};a(n)}),[]),u=Object(n.useCallback)((function(t){var e,n=(e=t,function(t){g(e).then((function(a){t({type:"REMOVE-TODOLIST",id:e})}))});a(n)}),[]),d=Object(n.useCallback)((function(t,e){var n=function(t,e){return function(a){I(t,e).then((function(n){a(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e);a(n)}),[]),f=Object(n.useCallback)((function(t){var e=function(t){return function(e){p(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item})}))}}(t);a(e)}),[a]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{container:!0,style:{padding:"20px"}},c.a.createElement(H,{addItem:f})),c.a.createElement(N.a,{container:!0,spacing:3},t.map((function(t){var a=e[t.id];return c.a.createElement(N.a,{item:!0,key:t.id},c.a.createElement(K.a,{style:{padding:"10px"}},c.a.createElement(B,{id:t.id,title:t.title,tasks:a,removeTask:i,changeFilter:s,addTask:o,changeTaskStatus:r,filter:t.filter,removeTodolist:u,changeTaskTitle:l,changeTodolistTitle:d})))}))))};var W=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,{position:"static"},c.a.createElement(u.a,null,c.a.createElement(d.a,{edge:"start",color:"inherit","aria-label":"menu"},c.a.createElement(b.a,null)),c.a.createElement(f.a,{variant:"h6"},"News"),c.a.createElement(m.a,{color:"inherit"},"Login"))),c.a.createElement(O.a,{fixed:!0},c.a.createElement(J,null)))},q=a(28),Y=a(63),$=Object(q.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(A.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!=e.taskId}))));case"ADD-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(A.a)({},e.task.todoListId,[e.task].concat(Object(E.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(k.a)(Object(k.a)({},t),{},Object(A.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(k.a)(Object(k.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(k.a)(Object(k.a)({},t),{},Object(A.a)({},e.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(k.a)({},t);return delete a[e.id],a;case"SET-TODOLISTS":var n=Object(k.a)({},t);return e.todolists.forEach((function(t){n[t.id]=[]})),n;case"SET-TASKS":return Object(k.a)(Object(k.a)({},t),{},Object(A.a)({},e.todolistId,e.tasks));default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!=e.id}));case"ADD-TODOLIST":return[Object(k.a)(Object(k.a)({},e.todolist),{},{filter:"all"})].concat(Object(E.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.id?Object(k.a)(Object(k.a)({},t),{},{filter:e.filter}):t}));case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(k.a)(Object(k.a)({},t),{},{filter:"all"})}));default:return t}}}),z=Object(q.d)($,Object(q.a)(Y.a));window.store=z,o.a.render(c.a.createElement(T.a,{store:z},c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},73:function(t,e,a){t.exports=a(102)},78:function(t,e,a){},79:function(t,e,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.24f8ef0b.chunk.js.map