import { IoHomeSharp } from 'react-icons/io5'
import { FcAbout } from 'react-icons/fc'
import { GrServices } from 'react-icons/gr'
import { MdContacts } from 'react-icons/md'
import { GiTargetPrize } from 'react-icons/gi'
import { IoLogInSharp } from 'react-icons/io5'
import { SiGnuprivacyguard } from 'react-icons/si'


export const API_BASE_URL = "http://localhost:8080/api/v1/"

export const LISTITEMS = [
    {link:'#', text : 'Home', icon : IoHomeSharp},
    {link:'#', text : 'About', icon : FcAbout},
    {link:'#', text : 'Services', icon : GrServices},
    {link:'#', text : 'Pricing', icon : GiTargetPrize},
    {link:'#', text : 'Contact', icon : MdContacts},
    {link:'/login', text : 'Login', icon : IoLogInSharp},
    {link:'/signup', text : 'Signup', icon : SiGnuprivacyguard},
    {link:'#', text : 'LogOut', icon : IoLogInSharp},
  ]