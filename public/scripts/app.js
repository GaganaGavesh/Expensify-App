'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// name = 'gagana';

// const obj = {
//     name: 'gagana',
//     getName(){
//         return this.name;
//         //return 'no this';
//     }
// };

// const getName = obj.getName.bind(obj);

// // console.log(getName);

// console.log(getName());    

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeteleOptions = _this.handleDeteleOptions.bind(_this); //bind the handleDeleteOptions with the current instance
        _this.handlePic = _this.handlePic.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: [] //props.options ////meken default props or provided props gannawa options proerty ekata//'opt1', 'opt2', 'opt3'
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                //if the json data is invalid we do nithing
                //there can be errors when JSON.parse,that is why we put a try catch
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            //component state eka update una gaman ma auto fire wenawa wela local storage ekata
            //this.state.options tika danawa, kalin options eka uda aluth options tika override wenawa
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount'); //IndecisionApp component eka screen eken gya gaman ma fire wenawa
        }
    }, {
        key: 'handleDeteleOptions',
        value: function handleDeteleOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePic',
        value: function handlePic() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {

            if (!option) {
                return 'Enter a valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                //returns -1 if not exists or return the index of the value 0,1,2,.........
                return 'This option is already exists';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat([option]) };
            });
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat([option])//concat merge 2 arrays and produce new array
            //     };
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            // const title = 'Indecision App';
            var subTitle = 'Put your life in the hands of a computer !';
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePic: this.handlePic }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeteleOptions: this.handleDeteleOptions,
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, { handleAddOptions: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {
//     options: []
// };

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render() {
//         // console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePic,
                disabled: !props.hasOptions },
            'What should I do !'
        )
    );
};

// class Action extends React.Component {
//     //me class eke wada walata ona wena method me class ekema liyanawa
//     //global method widiyata liwwath kisima aulak ne
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePic}
//                     disabled={!this.props.hasOptions}>
//                     What should I do !
//                 </button>
//             </div>);
//     }
// }


// class Options extends React.Component {
//     render() {
//         console.log(this.props.options.length);
//         return (
//             <div>
//                 {this.props.options.map((option) => <p key={option}>{option}</p>)}
//                 <Option />
//             </div>);
//     }
// }

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeteleOptions },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started !'
        ),
        React.createElement(
            'ol',
            null,
            props.options.map(function (option) {
                return React.createElement(Option, {
                    key: option,
                    optionText: option,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        )
    );
};

// class Options extends React.Component {

//     //render() kiyana eke correct binding eka tynawa, e nisa ekata apu this ma handleRemoveAll refer karana thanata bind kala nam hari
//     //mokada handleRemoveAll eka this ekak refer karanawa ekata context ekak or object ekak api yawanna ona
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeteleOptions}>Remove All</button>
//                 <ol>
//                     {this.props.options.map((option) => <Option key={option} optionText={option} />)}
//                 </ol>
//             </div>);
//     }
// }

var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    //click event eka enawa methenta
                    props.handleDeleteOption(props.optionText); //meka nikan thiwwoth props.handleDeleteOption event eka thama pass wenne
                }
            },
            'Remove'
        )
    );
};

// class Option extends React.Component {
//     render() {
//         return (<li>{this.props.optionText}</li>);
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        //pass the props up to super
        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleOption = _this2.handleOption.bind(_this2);
        _this2.state = { //error kiyana state eka me AddOption ekata adala ekak, e nisa thama meke dala tynne
            error: undefined //by default there is noerror
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleOption',
        value: function handleOption(e) {
            e.preventDefault(); //stop the full page reload

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOptions(option); //parent eke tyna method ekata data tika danawaa

            this.setState(function () {
                return { error: error };
            }); //error eka undefined nam render wen nee monawath
            // this.setState(() => {
            //     return {
            //         //error : error//state eke error ekata const error eka denawa
            //         //ES6 short hand - when a property whose value comes from a variable with the exact same name as the property
            //         //we can only put the one name
            //         //error = error: error
            //         error
            //     };
            // });
            if (!error) {
                e.target.elements.option.value = ''; //error ekak nathnam field eka clear karanwa
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        ' Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const User = (prop) => {
//     return (
//         <div>
//             <p>Name: {prop.name}</p>
//         </div>
//     );
// };


// const jsx = (
//     <div>
//         <IndecisionApp />
//     </div>
// );

//thani app component eke render wenna ona serama tyna nisa const ekakata dala ganna ona nee
//kelinma ReactDOM.render jsx eka wenuwata <IndecisionApp/> danna pluwan

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
