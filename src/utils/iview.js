import Vue from 'vue'
import 'iview/dist/styles/iview.css'
import LoadingBar from 'ivc/loading-bar'
import Icon from 'ivc/icon'
import { Row, Col } from 'ivc/grid'
import Menu from 'ivc/menu'
import Card from 'ivc/card'
import { Select, Option } from 'ivc/select'
import Radio from 'ivc/radio'
import Input from 'ivc/input'
import Table from 'ivc/table'
import Page from 'ivc/page'
import Button from 'ivc/button'
import DatePicker from 'ivc/date-picker'
import Modal from 'ivc/modal'
import BackTop from 'ivc/back-top'
import Spin from 'ivc/spin'
import Poptip from 'ivc/poptip'

const iview = {
  LoadingBar,
  Icon,
  Row,
  Col,
  Menu,
  MenuItem: Menu.Item,
  MenuGroup: Menu.Group,
  Card,
  Select,
  Option,
  Radio,
  RadioGroup: Radio.Group,
  Input,
  Table,
  Page,
  Button,
  DatePicker,
  Modal,
  BackTop,
  Spin,
  Poptip
}

Object.keys(iview).forEach((key) => {
  Vue.component(key, iview[key])
})

Vue.prototype.$IVIEW = {}
Vue.prototype.$Modal = Modal

export default iview
