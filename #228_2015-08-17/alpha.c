#include<stdio.h>

#define TRUE  1
#define FALSE 0

void main() {

    while( TRUE ) {
        printf( "\n Insert query string: " );
        
        int prev = getchar(), dir = 0, curr;

       	char *res_str;

        while( curr != '\n' && curr != EOF ) {

        	curr = getchar();

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

        	prev = curr;
        }

        if( sizeof(res_str) != 0 ){
        	if( dir ) {
	        	res_str = "IN ORDER";
	        } else {
	        	res_str = "REVERSE ORDER";
	        }
        }

        printf( "%s\n", res_str );
    }
}
