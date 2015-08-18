#include<stdio.h>

#define TRUE  1
#define FALSE 0

void main(int argc, char *argv[]) {
    
    if (argc < 2) {
    	printf("Error: expected one argument");
    	return;
    }

    int dir = 0, i = 0;
   	char *res_str;

    for (i = 0; i < argv[1].length-1; ++i) {
    	int prev = argv[1][i];
    	int curr = argv[1][i+1];

    	if( dir == 0 ) {
    		if( prev < curr )
    			dir = 1;
    		else if( prev > curr )
    			dir = -1;
    	}

    	if( dir != 0 ) {
    		if( dir ) {
    			if( prev > curr ) {
    				res_str = "NOT IN ORDER";
    				break;
    			}
    				
    		} else {
    			if( prev < curr ) {
    				res_str = "NOT IN ORDER";
    				break;
    			}
    		}
    	}
    }

    if( res_str != "NOT IN ORDER" ){
    	if( dir ) {
        	res_str = "IN ORDER";
        } else {
        	res_str = "REVERSE ORDER";
        }
    }

    printf( "%s\n", res_str );

}
