/* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
*/
/* 思路 
 *   1.src为基数则一定为无效
 *   2.第一个和倒数第一个为一对，相等返回true，以此类推第n个和倒数第n和为一对，出现false直接结束遍历
 */

var isValid = function (s) {
    //如果s长度为奇数则直接返回false
    if(s.length%2!==0) return false 
    //字典
    let = dictionaries_list = {')':'(',']':'[','}':'{'};
    //存放数据的栈
    let = temp_list = [];
    for(var i in s){
        if(temp_list.length>0&&s[i] in dictionaries_list){
            if(temp_list[temp_list.length-1]==dictionaries_list[s[i]]){
                temp_list.pop()
            }else{
                return false
            }
        }else{
            temp_list.push(s[i])
        }
    }
    return temp_list.length==0
};