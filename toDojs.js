// btn1 = document.getElementById("btn1");

// btn1.addEventListener("click", addTOlist);

// function addTOlist() {

//     var txt = document.getElementById("text").value;
//     if (txt == "") {
//         alert("یه چیزی وارد کن");
//     } else {
//         document.getElementById("text").value = "";
//         var main = document.getElementById("main");
//         let ulTag = document.createElement("ul");

//         main.appendChild(ulTag);

//         var remSpan = document.createElement("span");
//         var txtSpan = document.createTextNode("✕");

//         remSpan.appendChild(txtSpan);

//         var liTag = document.createElement("li");
//         liTag.appendChild(remSpan);
//         var txtNode = document.createTextNode(txt);
//         ulTag.appendChild(liTag);

//         liTag.appendChild(txtNode);



//         liTag.addEventListener("click", DoneTask);

//         function DoneTask() {
//             liTag.style.textDecoration = "line-through";
//         }
//         remSpan.addEventListener("click", RemoveTask);

//         function RemoveTask() {
//             main.removeChild(ulTag);
//         }
//     }
//     // var remove=document.createAttribute("onclick");
//     // remove.value="this.parentNode.remove();";
//     // spnTag.setAttributeNode(remove);
// }

function CreateList(handler) {
    let list1 = document.getElementById("list"+handler);

    let inputTag = document.createElement("input");
    inputTag.type = "text";

    list1.appendChild(inputTag);
    let lstSpan = document.getElementById("lstSpan"+handler);
    lstSpan.style.pointerEvents = 'none';
    // i will create it with function
    var btnOk = document.createElement("button");
    btnOk.innerHTML = "ایجاد لیست"
    var LbtnCansel = document.createElement("button");
    LbtnCansel.innerHTML = "انصراف";
    list1.appendChild(btnOk);
    list1.appendChild(LbtnCansel);

    // if user cansel it 
    LbtnCansel.addEventListener("click", canselList);

    function canselList() {
        list1.removeChild(inputTag);
        list1.removeChild(btnOk);
        list1.removeChild(LbtnCansel);
        lstSpan.style.pointerEvents = 'auto';

    }

    btnOk.addEventListener("click", addTitle);

    function addTitle() {
        let inputValue = inputTag.value;
        if (inputValue == "") {
            alert("لطفا نام لیست را وارد کنید");
        } else {

            // create title of list 

            list1.removeChild(lstSpan);

            let lstTitle = document.createElement("p");
            lstTitle.style.fontSize = "20px";
            list1.appendChild(lstTitle);

            let txtTitle = document.createTextNode(inputValue);
            // lstTitle.appendChild(txtTitle);
            // let ulTag= document.createElement("ul");
            // list1.appendChild(ulTag);
            // list1.appendChild(lstTitle);
            // ulTag.appendChild(txtTitle);
            // lstSpan.innerHTML = "";
            lstTitle.appendChild(txtTitle);

            canselList();

            // create task

            let addTask = document.createElement("span");
            list1.appendChild(addTask);
            // addTask.appendChild();
            addTask.innerHTML = '<i class="fas fa-plus-square" aria-hidden="true">      ایجاد کار جدید</i>';
            // addTask.innerHTML='';
            addTask.addEventListener("click", addTaskFun);

            function addTaskFun() {
                list1.removeChild(addTask);
                let newTask = document.createElement("input");
                newTask.type = "text";
                list1.appendChild(newTask);
                // will use function
                let btnOk = document.createElement("button");
                btnOk.innerHTML = "ایجاد کار";
                list1.appendChild(btnOk);
                let btnCansel = document.createElement("button");
                btnCansel.innerHTML = "انصراف";
                // newTask.appendChild(btnCansel);
                list1.appendChild(btnCansel);
                btnOk.addEventListener("click", addTasktitle);

                function addTasktitle() {
                    let newTaskVlu = newTask.value;
                    if (newTaskVlu == "") {
                        alert("لطفا عنوان کار را وارد کنید");

                    } else {
                        let taskUl = document.createElement("ul");
                        let taskLi = document.createElement("li");

                        // remove icone
                        let remItem = document.createElement("span");
                        remItem.innerHTML = '<i class="fas fa-times-circle"></i>';
                        taskLi.appendChild(remItem);
                        list1.appendChild(taskUl);
                        taskUl.appendChild(taskLi);
                        let newTaskTxt = document.createTextNode(newTaskVlu);
                        taskLi.appendChild(newTaskTxt);
                        ///create date
                        let pTagDate = document.createElement("p");
                        taskLi.appendChild(pTagDate);
                        let DateCreate = new Date();
                        pTagDate.innerHTML = DateCreate.toUTCString();

                        removebtn();
                        list1.appendChild(addTask);

                        ////remove task
                        remItem.addEventListener("click", RemoveTask);

                        function RemoveTask() {
                            confirm("مطمئنی میخوای حذفش کنی؟");
                            if (confirm) {
                                list1.removeChild(taskUl);
                            }

                        }
                        //done task
                        taskLi.addEventListener("click", DoneTaskFun);

                        function DoneTaskFun() {
                            taskLi.style.textDecoration = "line-through";

                            // alert("ایول..... تو تونستی از پسش بر بیای");
                        }

                    }

                }
                btnCansel.addEventListener("click", removebtn);

                function removebtn() {
                    list1.removeChild(newTask);
                    list1.removeChild(btnOk);
                    list1.removeChild(btnCansel);
                    list1.appendChild(addTask);


                }



            }
        }


    }
}


