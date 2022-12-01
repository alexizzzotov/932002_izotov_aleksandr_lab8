let node = document.querySelector(".List").cloneNode(true);
            
            const AddNewLine = () => 
            {
                document.querySelector(".Box").append(node.cloneNode(true));
            }
            const DeleteElement = (pointer) => 
            {
                pointer.parentElement.remove();
            }
            
            const MakeElementUp = (pointer) => 
            {
                let previous = pointer.parentElement.previousElementSibling;
                if (previous) pointer.parentElement.after(previous);
            }
            
            const MakeElementDown = (pointer) => 
            {
                let next = pointer.parentElement.nextElementSibling;
                if (next) pointer.parentElement.before(next);
            }
         
            const ButtonBox = document.createElement('div');
            ButtonBox.classList.add('ButtonBox');
               const AddElement = document.createElement('button');
               AddElement.classList.add('AddElement');
               const body = document.body;
               body.append(ButtonBox);
               AddElement.textContent = 'Добавить элемент';
               AddElement.setAttribute("onclick", "AddNewLine()");
               const SaveElement = document.createElement('button');  
               SaveElement.classList.add('SaveElement');
               SaveElement.textContent = 'Сохранить';
               SaveElement.setAttribute("onclick", "Save()");
               ButtonBox.append(AddElement);
               ButtonBox.append(SaveElement);

               const Print = document.createElement('div');
               Print.classList.add('Print');
               ButtonBox.append(Print);
               
               console.log(body)
              

                const Save = () => 
                {           
                let string = "";
                let containers = document.querySelectorAll(".List");
                
                for (let node of containers) 
                {
                    let key = node.children[0].value;
                    let value = node.children[1].value;
                    
                    string += `"${key}":"${value}",`;
                }
                
                
                document.querySelector(".Print").innerHTML = `{${string.slice(0, -1)}}`;
            }