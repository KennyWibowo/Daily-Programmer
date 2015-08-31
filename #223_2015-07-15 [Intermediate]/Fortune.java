import java.util.*;

public class Fortune {
    public static void main( String args[] ){
        if(args.length < 2) {
            System.out.println("Please specify two inputs.");
            System.exit( -1 );
        }

        String word_puzzle = args[0];
        String word_offense = args[1];

        LinkedHashMap<Character, Integer> letters = parseWord( word_offense );

        ArrayList<Character> stringbuilder = new ArrayList<Character>();

        // Populate the string builder with nulls
        for( int i = 0; i < word_puzzle.length(); i++ ) {
            stringbuilder.add( null );
        }

        for( char letter : letters.keySet() ) {
            for( int i = 0; i < word_puzzle.length(); i++ ) {
                if( word_puzzle.charAt( i ) == letter ) {
                    stringbuilder.set( i, letter );
                }
            }
        }

        // Remove nulls
        for( int i = 0; i < stringbuilder.size(); i++) {
            if( stringbuilder.get( i ) == null ) {
                stringbuilder.remove( i-- );
            }
        }

        System.out.println( listContains( stringbuilder, word_offense ) );
    }

    private static LinkedHashMap<Character, Integer> parseWord ( String word ) {
        LinkedHashMap<Character, Integer> letters = new LinkedHashMap<Character, Integer>();

        for(int i = 0; i < word.length(); i++ ) {
            letters.put( word.charAt( i ), 0 );
        }

        return letters;
    }

    private static boolean listContains( ArrayList<Character> query, String word_offense ) {

        for( int i = 0; i<query.size(); i++ ) {
            if( query.get( i ) == word_offense.charAt( 0 ) ) {
                i++;
                for( int j = 1; j<word_offense.length() && i<query.size(); j++, i++ ) {
                    if( query.get( i ) != word_offense.charAt( j ) ){
                        break;
                    } else if( j == word_offense.length() - 1 ) {
                        return true;
                    }
                }

            }
        }

        return false;
    }
}
