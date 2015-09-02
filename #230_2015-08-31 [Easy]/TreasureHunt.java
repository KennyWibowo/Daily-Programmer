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
		boolean found = false;
		int pos = -1;
		String dir = "";

		for( int j=0; j<json.length(); j++ ) {
			if( json.charAt(j) == query.charAt(0) ) {
				j++;

				for( int q=1; q<query.length() && j<json.length(); q++, j++ ) {
					if( json.charAt(j) != query.charAt(q) ) {
						break;
					} else if( q == query.length()-1 ) {
						found = true;
						pos = j- (query.length()-1);
					}
				}
			}

			if(found) {
				break;
			}
		}

		if(!found) {
			return "Could not find " + query + " in JSON.";
		}

		return "Found: " + query + " at position " + pos + " (test: "+ json.substring(pos, pos + query.length())+ " )";
	}
}

class Closures {
	private char[] closures;
	private boolean closed;
	private boolean directionLeft;

	public Closures(char start, char end, String direction) {
		this.closures = new char[2];
		this.closures[0] = start;
		this.closures[1] = end;
		this.closed = false;

		this.directionLeft = (direction == "left");
	}

	public void closed() {
		closed = true;
	}

	public boolean getClosed() {
		return closed;
	}

	public String getDirection() {
		if(directionLeft) {
			return "left";
		}

		return "right";
	}

}