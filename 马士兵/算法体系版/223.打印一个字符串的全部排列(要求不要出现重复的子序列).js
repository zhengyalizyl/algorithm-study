function permutation(str){
  let ans=[];
  if(str==null||str.length==0){
     return ans;
  }
  let str = s.split('');
   g(str,0,ans)
}

function  g(str,index,ans){
   if(index==str.length){
    ans.push(str)
   }else{
     let visited=[];
     //比如acbc，c就不要和c交换了
     for(let i=index;i<str.length;i+=1){
       if(!visited[str[i]]){ //曾经试过了就不需要交换了
        visited[str[i]] =true;//这里剪枝笔最后一步过滤好
        swap(str,index,i);
        g(str,index+1,ans);//恢复现场
        swap(str,index,i)
       }
     }
   }
}

function swap(str,i,j){
   let tmp=str[i];
   str[i]=str[j];
   str[j] =tmp;
}


