"use strict";(self.webpackChunkbrave_wallet_docs=self.webpackChunkbrave_wallet_docs||[]).push([[656],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7856:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2},l="Methods",s={unversionedId:"ethereum/rpc-api/methods",id:"ethereum/rpc-api/methods",title:"Methods",description:"eth_sendTransaction",source:"@site/docs/ethereum/rpc-api/methods.md",sourceDirName:"ethereum/rpc-api",slug:"/ethereum/rpc-api/methods",permalink:"/brave-wallet-docs/ethereum/rpc-api/methods",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/ethereum/rpc-api/methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/brave-wallet-docs/ethereum/rpc-api/overview"},next:{title:"Overview",permalink:"/brave-wallet-docs/solana"}},p=[{value:"<code>eth_sendTransaction</code>",id:"eth_sendtransaction",children:[],level:2},{value:"<code>wallet_addEthereumChain</code>",id:"wallet_addethereumchain",children:[],level:2},{value:"<code>wallet_switchEthereumChain</code>",id:"wallet_switchethereumchain",children:[],level:2},{value:"<code>wallet_watchAsset</code>",id:"wallet_watchasset",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"methods"},"Methods"),(0,i.kt)("h2",{id:"eth_sendtransaction"},(0,i.kt)("inlineCode",{parentName:"h2"},"eth_sendTransaction")),(0,i.kt)("h2",{id:"wallet_addethereumchain"},(0,i.kt)("inlineCode",{parentName:"h2"},"wallet_addEthereumChain")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wallet_addEthereumChain")," accepts a single object parameter, specified by the following TypeScript interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface AddEthereumChainParameter {\n  chainId: string;\n  blockExplorerUrls?: string[];\n  chainName?: string;\n  iconUrls?: string[];\n  nativeCurrency?: {\n    name: string;\n    symbol: string;\n    decimals: number;\n  };\n  rpcUrls?: string[];\n}\n")),(0,i.kt)("h2",{id:"wallet_switchethereumchain"},(0,i.kt)("inlineCode",{parentName:"h2"},"wallet_switchEthereumChain")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wallet_switchEthereumChain")," accepts a single object parameter, specified by the following TypeScript interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface SwitchEthereumChainParameter {\n  chainId: string;\n}\n")),(0,i.kt)("h2",{id:"wallet_watchasset"},(0,i.kt)("inlineCode",{parentName:"h2"},"wallet_watchAsset")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"wallet_watchAsset")," accepts a single object parameter, specified by the following TypeScript interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface WatchAssetParameters {\n  type: string; // The asset's interface, e.g. 'ERC20'\n  options: {\n    address: string; // The hexadecimal Ethereum address of the token contract\n    symbol?: string; // A ticker symbol or shorthand, up to 5 alphanumerical characters\n    decimals?: number; // The number of asset decimals\n    image?: string; // A string url of the token logo\n  };\n}\n")))}d.isMDXComponent=!0}}]);