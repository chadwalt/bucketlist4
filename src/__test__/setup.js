import { configure } from 'enzyme'
import Adapter from "enzyme-adapter-react-15"

configure({ adapter: new Adapter() })

global.window = {}
import localStorage from "mock-local-storage"
window.localStorage = global.localStorage