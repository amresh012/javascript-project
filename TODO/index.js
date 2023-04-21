document.querySelector("#Add").onclick = function()
{
    if(document.querySelector("#newtodo input").value.length == 0)
    {
        alert("plaese Enter a task")
    }
    else
    {
        document.querySelector(".task").innerHTML
        +=`
           <div id="task">
           <span id="taskname">
           ${document.querySelector('#newtodo input').value}
           </span>
           <button class="delete">
           <i class="fa fa-trash"></i>
           </button>
        `;

        var current_task = document.querySelectorAll(".delete");
        for(var i=0;i<current_task.length;i++)
        {
            current_task[i].onclick=function()
            {
                this.parentNode.remove();
            }
        }
    }
}