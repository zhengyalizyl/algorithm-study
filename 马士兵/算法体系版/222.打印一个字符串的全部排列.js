//abc
//方法一：
function permutation(str){
  let ans=[];
  if(str==null||str.length==0){
     return ans;
  }
  let str = s.split('');
  let path='';
   f(str,path,ans)

  return ans;
}

function  f(rest,path,ans){
  if(rest.length==0){
    ans.push(path);//加答案
  }else{
     let len=rest.length;
     for(let i=0;i<len;i+=1){//所有的都摊开
       let temp=rest[i];//当前的字符
       rest.splice(i,1);
       f(rest,path+temp,ans);//取掉已的那个
       rest.splice(i,0,temp);//恢复现场
     }
  }
}


//方法二:
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
     for(let i=index;i<str.length;i+=1){
       swap(str,index,i);
       g(str,index+1,ans);
       swap(str,index,i);//恢复现场
     }
   }
}

function swap(str,i,j){
   let tmp=str[i];
   str[i]=str[j];
   str[j] =tmp;
}


