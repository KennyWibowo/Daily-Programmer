import java.util.*;
import java.io.*;

public class TreasureHunt {
	public static void main(String args[]) {
		if(args.length < 1) {
			System.out.println("Please specify a filename");
			System.exit(-1);
		}

		List<String> input;

		try {
			
			input = readFile(args[0]);
			System.out.println(input.size());

		} catch (Exception e) {
			System.out.println("Error: " + e.getMessage());
		}

	}

	private static List<String> readFile(String filename) throws Exception {
	    String line = null;
	    List<String> records = new ArrayList<String>();
	 
	    // wrap a BufferedReader around FileReader
	    BufferedReader bufferedReader = new BufferedReader(new FileReader(filename));
	 
	    // use the readLine method of the BufferedReader to read one line at a time.
	    // the readLine method returns null when there is nothing else to read.
	    while ((line = bufferedReader.readLine()) != null) {
	        records.add(line);
	    }
	   
	    // close the BufferedReader when we're done
	    bufferedReader.close();
	    return records;
	}
}