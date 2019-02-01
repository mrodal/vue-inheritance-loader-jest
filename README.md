# vue-inheritance-loader-jest

Jest transform to support testing on components that use [vue-inheritance-loader](https://github.com/mrodal/vue-inheritance-loader). 

## Installation

Install it onto your project with:
```
npm install --save-dev vue-inheritance-loader-jest
```

You have to add it to your jest configuration to run on vue files:
```javascript
transform: {
    '^.+\\.vue$': 'vue-inheritance-loader-jest'
}
```  


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[ISC](https://choosealicense.com/licenses/isc/)