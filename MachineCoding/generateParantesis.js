/**
 
    Input:
    N = 3

    Output:
    ((()))
    (()())
    (())()
    ()(())
    ()()()
 */
class Solution {
    
    AllParenthesis(N){
        //code here
        let finalList =[];
        
        const print = (arr, pos, n, open, close) => {
            if(close === n) {
                finalList.push(arr.join(''))
            }
            else {
                if(open > close) {
                    arr[pos]= ')';
                    print(arr, pos+1, n, open, close+1);
                }
                if(open < n) {
                    arr[pos] = '(';
                    print(arr, pos+1,n,open+1, close);
                }
            }
        };
        let array = new Array(2*N);
        print(array, 0, N, 0,0);
        return finalList;
    }
}

