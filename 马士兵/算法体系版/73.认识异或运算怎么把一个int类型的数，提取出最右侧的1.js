//怎么把一个int类型的数，提取出最右侧的1来
// 比如a=0110110001000，得倒结果ans=0000000001000
// ans =a&(-a)
// ~a+1=-a;