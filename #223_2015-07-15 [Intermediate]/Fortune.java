import java.util.*;

public class Fortune {
	public static void main( String args[] ){
		if(args.length < 2) {
			System.out.println("Please specify two inputs.");
			System.exit(-1);
		}

		String word_puzzle = args[0];
		String word_offense = args[1];

		LinkedHashMap<Character, Integer> letters = parseWord( word_offense );

		ArrayList<Character> stringbuilder = new ArrayList<Character>(word_puzzle.length());

		for(char letter : letters.keySet()) {
			for(int i=0; i<word_puzzle.length(); i++) {
				if(word_puzzle.charAt(i) == letter) {
					stringbuilder.add(i, letter);
				}
			}
		}

		// Remove nulls
		for(int i=0; i<stringbuilder.length(); i++) {
			if(stringbuilder.get(i) == null) {
				stringbuilder.remove(i--);
			}
		}

		System.out.println(listContains(stringbuilder, word_offense));
	}

	private static LinkedHashMap<Character, Integer> parseWord ( String word ) {
		LinkedHashMap<Character, Integer> letters = new LinkedHashMap<Character, Integer>();

		for(int i=0; i<word.length(); i++) {
			letters.put(word.charAt(i), 0);
		}

		return letters;
	}
