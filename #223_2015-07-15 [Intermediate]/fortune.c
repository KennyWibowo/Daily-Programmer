#include <stdio.h>

void main( int argc, char **argv ) {
    
    if ( argc != 3 ) {
        printf( "Usage: %s [Secret word] [Test problem word]\n", argv[0] );
        return;
    }

    testWords( argv[1], argv[2] );

}

int testWords( char *secret_word, char *test_word ) {
    int test_pos = 0;
    int secret_pos = 0;
    
    char *test_builder = malloc( sizeof(*secret_word) );

    free( *test_builder );
}
