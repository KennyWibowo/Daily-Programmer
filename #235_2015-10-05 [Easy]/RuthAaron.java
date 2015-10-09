import java.util.*;
import java.io.*;

public class RuthAaron {
	public static void main(String args[]) {
		try {
			if(args.length < 1) {
				throw new Exception("Must provide a filename");
			}

			ArrayList<String> fileContent = readFile(args[0]);
			RuthAaronPairs tester = new RuthAaronPairs();
			int pairNums = Integer.parseInt(fileContent.get(0));

			for( int i = 1; i < pairNums+1; i++) {
				ArrayList<Integer> parsed = tester.parseParenInts(fileContent.get(i));

				System.out.print(parsed.get(0) + " ");
				System.out.println(parsed.get(1));
			}
		} catch(Exception e) {
			e.printStackTrace();

			System.exit(-1);
		}
	}

    private static ArrayList<String> readFile( String filename ) throws Exception {
        BufferedReader bufferedReader = new BufferedReader(new FileReader(filename));
        ArrayList<String> lineList = new ArrayList<String>();
        String line = "";

        while((line = bufferedReader.readLine()) != null)
            lineList.add(line);

        // close the BufferedReader when we're done
        bufferedReader.close();
        
        return lineList;
    }

}

class RuthAaronPairs {

    public ArrayList<Integer> parseParenInts(String parened) {
    	ArrayList<Integer> pair = new ArrayList<Integer>(2);
    	int pivot = -1;

    	for( int i = 1; i < parened.length()-1; i++ ) {
    		if ( parened.charAt(i) == ',') {
    			pivot = i;
    			break;
    		}
    	}

    	pair.add(Integer.parseInt(parened.substring(1, pivot)));
    	pair.add(Integer.parseInt(parened.substring(pivot+1, parened.length()-1)));

    	return pair;
    }

    // public boolean test
}