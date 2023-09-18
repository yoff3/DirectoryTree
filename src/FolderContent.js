export function FolderContent({data}){
    const noFilesFound = "There are no files in the current directory"

    let filtredData = data.filter(derictory => derictory.type === "file")
    
    return <table className="fileInfoTable">
            <thead className="fileInfoHeader">
              <tr>
                <th className="fileName">File name</th>
                <th className="fileSize">Size</th>
                <th className="fileTime">Last Modification</th>
              </tr>
            </thead>
            <tbody>
              {filtredData.length === 0 &&  
                <h3 className="centeredLocated">{noFilesFound}</h3>}
              {filtredData.map(file => (
                  <tr className="fileInfo fileRowColor" key = {crypto.randomUUID()}>
                    <td className="fileName">{file.name}</td>
                    <td className="fileSize">{file.size}</td>
                    <td className="fileTime">{file.time}</td>
                  </tr>))}
            </tbody>
          </table>
  };
  