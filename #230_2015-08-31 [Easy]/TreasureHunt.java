import java.util.*;
import java.io.*;

public class TreasureHunt {
	public static void main(String args[]) {
		if(args.length < 1) {
			System.out.println("Please specify a filename");
			System.exit(-1);
		}

		String input;
		String query = "dailyprogrammer";

		try {
			
			input = readFile(args[0]);
			System.out.println(parseJSON(input, query));

		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	private static String readFile(String filename) throws Exception {
	    BufferedReader bufferedReader = new BufferedReader(new FileReader(filename));
	    String line = bufferedReader.readLine();

	    // close the BufferedReader when we're done
	    bufferedReader.close();
	    
	    return line;
	}
	
	private static String parseJSON(String json, String query) {
		int pos = json.indexOf(query);
		String message = "";
		
		if(pos < 0) {
			return "Could not find " + query + " in JSON.";
		}

		boolean skipBracket = false;
		boolean skipBrace = false;
		int prevpos = pos;

		for(int j=pos; j>=0; j--) {
			if(json.charAt(j) == '[') {
				if(!skipBracket) {
					// Handle array
					message = parseArr(json, prevpos) + " -> " + message;
					prevpos = pos;
				} else {
					skipBracket = false;
				}
			} else if(json.charAt(j) == '{') {
				if(!skipBrace) {
					// Handle object
					message = parseKey(json, prevpos) + " -> " + message;
					prevpos = pos;
				} else {
					skipBrace = false;
				}
			} else if(json.charAt(j) == '}') {
				skipBrace = true;
			} else if(json.charAt(j) == ']') {
				skipBracket = true;
			}
		}

		return message;
	}

	private static String parseKey(String json, int pos) {
		while(json.charAt(pos) != '"') pos--;
		int start = pos;
		
		pos--;

		while(json.charAt(pos) != '"') pos--;
		int end = pos;

		return json.substring(end, start+1);
	}

	private static int parseArr(String json, int pos) {
		int count = 0;

		while(json.charAt(pos) != '[') {
			if(json.charAt(pos) == ']') {
				while(json.charAt(pos) != '[') pos --;
			}

			if(json.charAt(pos) == ',')
				count++;
			pos--;
		}

		return  count;
	}
}