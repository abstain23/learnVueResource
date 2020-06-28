const temp = require('vue-template-compiler')

const div = '<div>{{age}}</div>'

console.log(temp.compile(div))

/*
{
  ast: {
    type: 1,
    tag: 'div',
    attrsList: [],
    attrsMap: {},
    rawAttrsMap: {},
    parent: undefined,
    children: [ [Object] ],
    plain: true,
    static: false,
    staticRoot: false
  },
  render: "with(this){return _c('div',[_v(_s(age))])}",
  staticRenderFns: [],
  errors: [],
  tips: []
}
*/