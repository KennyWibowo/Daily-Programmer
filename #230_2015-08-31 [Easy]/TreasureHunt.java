import java.util.*;
import java.io.*;

public class TreasureHunt {
	public static void main(String args[]) {
		if(args.length < 2) {
			System.out.println("Please provide two parameters");
			System.out.println("Usage: java TreasureHunt [filename] [query string]");
			System.exit(-1);
		}

		try {
			
			String input = readFile(args[0]);
			String query = args[1];

			System.out.println(parseJSON(input, query));

		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
			e.printStackTrace();
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
			return "Could not find \"" + query + "\" in JSON file.";
		}

		boolean skipBracket = false;
		boolean skipBrace = false;
		boolean first = true;

		for(int j=pos; j>=0; j--) {
			if(json.charAt(j) == '[') {
				if(!skipBracket) {
					// Handle array
					if(message == "")
						message = "" + parseArr(json, pos);
					else
						message = parseArr(json, pos) + " -> " + message;

					pos = j;
				} else {
					skipBracket = false;
				}
			} else if(json.charAt(j) == '{') {
				if(!skipBrace) {
					// Handle object
					if(message == "")
						message = "" + parseKey(json, pos);
					else
						message = parseKey(json, pos) + " -> " + message;

					pos = j;
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

		return json.substring(end+1, start);
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