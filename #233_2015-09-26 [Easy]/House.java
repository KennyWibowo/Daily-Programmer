public class House {
    public static void main( String args[] ) {
        ArrayList<String> content = readFile("input1.txt");

        for(int i=0; i<content.size(); i++) {
            System.out.println(content.get(i));
        }
    }

    private static ArrayList<String> readFile(String filename) throws Exception {
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