export function dispath(componentName,eventName){
    let parent = this.$parent || this.$root;
    while(parent){
        let name = parent.$options.name;
        if(name && name==componentName){
            break;
        }else{
            parent= parent.$parent
        }
    }
    if(parent){
        if(eventName){
            return parent.$emit(eventName);//触发这个方法
        }
        return parent; //返回父组件
    }
}

export function broadcast(componentName,eventName){
    let children = this.$children;
    let arr=[];
    function findFormItem(children){
        children.forEach(child => {
            let name = child.$options.name;
            if(name && name=== componentName){
                if(eventName){
                    arr.push(child.$emit('eventName'))
                }else{
                    arr.push(child)
                }
            }
            if(child.$children){
                findFormItem(child.$children);
            }
        });
    }
    findFormItem(children);
    return arr;
}