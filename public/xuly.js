function globalFunction(name){
    alert('global function!' + name);
}

var HuyQuan = React.createClass({
    layThongTin: function() {
        alert(this.props.children);
    },
    render: function(){
        return(
            <div>
            <h1> {this.props.ten} Test Props </h1>
            <p> {this.props.children} </p>
            <button onClick={()=>{var str = this.props.ten + ' ' + this.props.children; globalFunction(str)}}>Thong tin</button>
            </div>g
        );
    }
});

var HuyQuan2 = React.createClass({
    render: function(){
        return(
            <h3> Component 2</h3>
        );
    }
});

var HuyQuan3 = React.createClass({
    render: function(){
        return(
            <h5> Component 3</h5>
        );
    }
});

ReactDOM.render(
    <div>
    <HuyQuan ten="ReactJS">ABC</HuyQuan>
    <HuyQuan ten="NodeJS">XYZ</HuyQuan>
    </div>
, document.getElementById("root"));
