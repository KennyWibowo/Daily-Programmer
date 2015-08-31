import java.util.*;

public class Fortune {
	public static void main( String args[] ){
		if(args.length < 2) {
			System.out.println("Please specify two inputs.");
			System.exit(-1);
		}

		String word_puzzle = args[0];
		String word_offense = args[1];

		HashMap<Character, Integer> letters = parseWord( word_offense );

		char stringbuilder[] = new char[word_puzzle.length()];

	}

	private static HashMap<Character, Integer> parseWord ( String word ) {
		HashMap<Character, Integer> letters = new HashMap<Character, Integer>();

		for(int i=0; i<word.length(); i++) {
			letters.put(word.charAt(i), 0);
		}

		return letters;
	}
}