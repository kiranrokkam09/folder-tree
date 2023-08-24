import React, { Component } from 'react';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar } from '@syncfusion/ej2-react-filemanager';

class FolderTree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: {},
            selectedID: ''
        }
    }

    componentDidMount() {
        let dataFromServer = this.props.data;
        let tempTreeData = {};
        dataFromServer.forEach(d => {
            let name = d.name;
            let splits = name.split('/');
            let index = 0;
            var tempDictionary = tempTreeData;
            while ((index + 1) < splits.length) {
                let key = '\\' + splits[index];
                if (tempDictionary[key]) tempDictionary = tempDictionary[key];
                else {
                    tempDictionary[key] = {};
                    tempDictionary = tempDictionary[key];
                }
                index = index + 1;
            }
            tempDictionary[splits[index]] = d.id;
        });
        var treeData = { key: 'root', title: '/', children: [] };
        dataFromServer.forEach(e => {
            let getObjectWithKey = (arr, key) => {
                let tempObj;
                arr.forEach(a => {
                    if (('\\' + key) === a.key) tempObj = a;
                });
                if (!tempObj) {
                    tempObj = { key: '\\' + key, title: key, children: [] };
                    arr.push(tempObj);
                }
                return tempObj;
            }
            let splits = e.name.split('/');
            let index = 0;
            let tempNode = treeData;
            while ((index + 1) < splits.length) {
                tempNode = getObjectWithKey(tempNode.children, splits[index]);
                index = index + 1;
            }
            let titleHead = splits[splits.length - 1];
            let dataTitle = <span id={e.id} className='rowValue' onClick={() => this.onSelect(e.id)}>{titleHead}
            <button onClick={() => alert("Hello")}>delete</button>
            <button onClick={()=>alert(e.delete)}>edit</button>

            </span>;
            let data = { key: e.id, title: dataTitle };
            tempNode.children.push(data);
        });
        this.setState({ treeData: treeData });
    }

    onSelect(id) {
        this.props.data.forEach(d => {
            if(d.id === id) {
                this.setState({ selectedID: id });
                let obj = document.getElementsByClassName('rowValue');
                Object.keys(obj).forEach( key => {
                    obj[key].style.backgroundColor = 'white';
                });
                document.getElementById(id).style.backgroundColor = '#ececec';
            }
        });
    }


    render() {
        return (
            <div>
                <Tree className='myCls' showLine selectable={false} treeData={this.state.treeData.children} />
                <div>{this.state.selectedID}</div>
            </div>
            
        )
    }
}

export default FolderTree;