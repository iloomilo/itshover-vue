export interface IconType {
  name: string
  componentName: string
  keywords: string[]
  customProps?: {
    name: string
    type: string
    defaultValue: string | boolean | number
  }[]
}

const ICON_LIST: IconType[] = [
  {
    name: 'accessibility-icon',
    componentName: 'AccessibilityIcon',
    keywords: ['accessibility', 'a11y', 'wheelchair', 'disabled', 'inclusive']
  },
  {
    name: 'airplane-icon',
    componentName: 'AirplaneIcon',
    keywords: ['airplane', 'plane', 'airport', 'travel', 'transportation']
  },
  {
    name: 'alarm-clock-plus-icon',
    componentName: 'AlarmClockPlusIcon',
    keywords: ['alarm', 'clock', 'plus', 'add', 'timer', 'time', 'reminder']
  },
  {
    name: 'align-center-icon',
    componentName: 'AlignCenterIcon',
    keywords: ['align', 'center', 'text', 'format', 'paragraph']
  },
  {
    name: 'align-vertical-space-around-icon',
    componentName: 'AlignVerticalSpaceAroundIcon',
    keywords: ['align', 'vertical', 'space', 'around', 'distribute', 'layout']
  },
  {
    name: 'ambulance-icon',
    componentName: 'AmbulanceIcon',
    keywords: ['ambulance', 'emergency', 'medical', 'hospital', 'vehicle', 'health']
  },
  {
    name: 'angry-icon',
    componentName: 'AngryIcon',
    keywords: ['angry', 'mad', 'emotion', 'face', 'emoji', 'upset']
  },
  {
    name: 'ampersand-icon',
    componentName: 'AmpersandIcon',
    keywords: ['ampersand', 'and', 'symbol', 'typography', 'character']
  },
  {
    name: 'annoyed-icon',
    componentName: 'AnnoyedIcon',
    keywords: ['annoyed', 'irritated', 'emotion', 'face', 'emoji', 'frustrated']
  },
  {
    name: 'apple-brand-logo',
    componentName: 'AppleBrandLogo',
    keywords: ['apple', 'brand', 'logo', 'mac', 'ios']
  },
  {
    name: 'arrow-back-icon',
    componentName: 'ArrowBackIcon',
    keywords: ['arrow', 'back', 'return', 'undo', 'previous']
  },
  {
    name: 'arrow-back-up-icon',
    componentName: 'ArrowBackUpIcon',
    keywords: ['arrow', 'back', 'up', 'undo', 'return']
  },
  {
    name: 'arrow-big-left-icon',
    componentName: 'ArrowBigLeftIcon',
    keywords: ['arrow', 'big', 'left', 'back', 'previous', 'navigation']
  },
  {
    name: 'arrow-big-left-dash-icon',
    componentName: 'ArrowBigLeftDashIcon',
    keywords: ['arrow', 'big', 'left', 'dash', 'back', 'previous']
  },
  {
    name: 'arrow-big-right-icon',
    componentName: 'ArrowBigRightIcon',
    keywords: ['arrow', 'big', 'right', 'next', 'forward', 'navigation']
  },
  {
    name: 'arrow-big-right-dash-icon',
    componentName: 'ArrowBigRightDashIcon',
    keywords: ['arrow', 'big', 'right', 'dash', 'next', 'forward']
  },
  {
    name: 'arrow-big-up-icon',
    componentName: 'ArrowBigUpIcon',
    keywords: ['arrow', 'big', 'up', 'upload', 'top', 'navigation']
  },
  {
    name: 'arrow-big-up-dash-icon',
    componentName: 'ArrowBigUpDashIcon',
    keywords: ['arrow', 'big', 'up', 'dash', 'upload', 'top']
  },
  {
    name: 'arrow-big-down-icon',
    componentName: 'ArrowBigDownIcon',
    keywords: ['arrow', 'big', 'down', 'download', 'bottom', 'navigation']
  },
  {
    name: 'arrow-big-down-dash-icon',
    componentName: 'ArrowBigDownDashIcon',
    keywords: ['arrow', 'big', 'down', 'dash', 'download', 'bottom']
  },
  {
    name: 'arrow-down-1-0-icon',
    componentName: 'ArrowDown10Icon',
    keywords: ['arrow', 'down', 'sort', 'descending', 'number', 'order']
  },
  {
    name: 'arrow-down-0-1-icon',
    componentName: 'ArrowDown01Icon',
    keywords: ['arrow', 'down', 'sort', 'ascending', 'number', 'order']
  },
  {
    name: 'arrow-narrow-down-dashed-icon',
    componentName: 'ArrowNarrowDownDashedIcon',
    keywords: ['arrow', 'down', 'dashed', 'download', 'scroll']
  },
  {
    name: 'arrow-narrow-down-icon',
    componentName: 'ArrowNarrowDownIcon',
    keywords: ['arrow', 'down', 'download', 'scroll']
  },
  {
    name: 'arrow-narrow-left-dashed-icon',
    componentName: 'ArrowNarrowLeftDashedIcon',
    keywords: ['arrow', 'left', 'dashed', 'back', 'previous']
  },
  {
    name: 'arrow-narrow-left-icon',
    componentName: 'ArrowNarrowLeftIcon',
    keywords: ['arrow', 'left', 'back', 'previous']
  },
  {
    name: 'arrow-narrow-right-dashed-icon',
    componentName: 'ArrowNarrowRightDashedIcon',
    keywords: ['arrow', 'right', 'dashed', 'next', 'forward']
  },
  {
    name: 'arrow-narrow-right-icon',
    componentName: 'ArrowNarrowRightIcon',
    keywords: ['arrow', 'right', 'next', 'forward']
  },
  {
    name: 'arrow-narrow-up-dashed-icon',
    componentName: 'ArrowNarrowUpDashedIcon',
    keywords: ['arrow', 'up', 'dashed', 'upload', 'scroll']
  },
  {
    name: 'arrow-narrow-up-icon',
    componentName: 'ArrowNarrowUpIcon',
    keywords: ['arrow', 'up', 'upload', 'scroll']
  },
  {
    name: 'at-sign-icon',
    componentName: 'AtSignIcon',
    keywords: ['at', 'sign', '@', 'email', 'mention', 'tag', 'social']
  },
  {
    name: 'banana-icon',
    componentName: 'BananaIcon',
    keywords: ['banana', 'fruit', 'food', 'tropical', 'yellow']
  },
  {
    name: 'battery-icon',
    componentName: 'BatteryIcon',
    keywords: ['battery', 'charging', 'bolt']
  },
  {
    name: 'battery-charging-icon',
    componentName: 'BatteryChargingIcon',
    keywords: ['battery', 'charging', 'power']
  },
  {
    name: 'battery-pause-icon',
    componentName: 'BatteryPauseIcon',
    keywords: ['battery', 'pause', 'hold', 'wait']
  },
  {
    name: 'bell-off-icon',
    componentName: 'BellOffIcon',
    keywords: ['bell', 'off', 'mute', 'notification', 'disable', 'silent']
  },
  {
    name: 'bluetooth-connected-icon',
    componentName: 'BluetoothConnectedIcon',
    keywords: ['bluetooth', 'wireless', 'connected', 'pairing', 'audio', 'device']
  },
  {
    name: 'book-icon',
    componentName: 'BookIcon',
    keywords: ['book', 'read', 'library', 'study']
  },
  {
    name: 'bookmark-icon',
    componentName: 'BookmarkIcon',
    keywords: ['bookmark', 'save', 'favorite', 'mark']
  },
  {
    name: 'brand-google-icon',
    componentName: 'BrandGoogleIcon',
    keywords: ['google', 'brand', 'logo', 'search', 'social']
  },
  {
    name: 'brand-nextjs-icon',
    componentName: 'BrandNextjsIcon',
    keywords: ['nextjs', 'next', 'brand', 'logo', 'react', 'framework', 'vercel']
  },
  {
    name: 'brightness-down-icon',
    componentName: 'BrightnessDownIcon',
    keywords: ['brightness', 'down', 'dim', 'light', 'sun']
  },
  {
    name: 'bulb-svg',
    componentName: 'BulbSvg',
    keywords: ['bulb', 'light', 'idea', 'creativity']
  },
  {
    name: 'camera-icon',
    componentName: 'CameraIcon',
    keywords: ['camera', 'photo', 'picture', 'lens', 'photography', 'capture']
  },
  {
    name: 'camera-off-icon',
    componentName: 'CameraOffIcon',
    keywords: ['camera', 'off', 'disabled', 'no camera', 'privacy']
  },
  {
    name: 'candy-cane-icon',
    componentName: 'CandyCaneIcon',
    keywords: ['candy', 'cane', 'christmas', 'sweet', 'holiday', 'festive']
  },
  {
    name: 'cart-icon',
    componentName: 'CartIcon',
    keywords: ['cart', 'shopping', 'buy', 'store']
  },
  {
    name: 'chart-bar-icon',
    componentName: 'ChartBarIcon',
    keywords: ['chart', 'bar', 'graph', 'statistics', 'data', 'analytics']
  },
  {
    name: 'chart-covariate-icon',
    componentName: 'ChartCovariateIcon',
    keywords: ['chart', 'covariate', 'scatter', 'plot', 'correlation', 'data']
  },
  {
    name: 'chart-histogram-icon',
    componentName: 'ChartHistogramIcon',
    keywords: ['chart', 'histogram', 'graph', 'distribution', 'statistics', 'data']
  },
  {
    name: 'chart-line-icon',
    componentName: 'ChartLineIcon',
    keywords: ['chart', 'line', 'graph', 'trend', 'statistics', 'data']
  },
  {
    name: 'chart-pie-icon',
    componentName: 'ChartPieIcon',
    keywords: ['chart', 'pie', 'graph', 'percentage', 'statistics', 'data']
  },
  {
    name: 'checked-icon',
    componentName: 'CheckedIcon',
    keywords: ['check', 'tick', 'success', 'done']
  },
  {
    name: 'clock-icon',
    componentName: 'ClockIcon',
    keywords: ['clock', 'time', 'watch', 'timer', 'schedule']
  },
  {
    name: 'code-icon',
    componentName: 'CodeIcon',
    keywords: ['code', 'brackets', 'programming', 'developer', 'syntax']
  },
  {
    name: 'code-xml-icon',
    componentName: 'CodeXmlIcon',
    keywords: ['code', 'xml', 'html', 'markup', 'tag', 'programming']
  },
  {
    name: 'coffee-icon',
    componentName: 'CoffeeIcon',
    keywords: ['coffee', 'cup', 'drink', 'cafe', 'steam', 'hot', 'beverage']
  },
  {
    name: 'coin-bitcoin-icon',
    componentName: 'CoinBitcoinIcon',
    keywords: ['coin', 'bitcoin', 'crypto', 'btc', 'cryptocurrency', 'money', 'digital']
  },
  {
    name: 'credit-card',
    componentName: 'CreditCard',
    keywords: ['credit', 'card', 'payment', 'money']
  },
  {
    name: 'cpu-icon',
    componentName: 'CpuIcon',
    keywords: ['cpu', 'processor', 'chip', 'hardware', 'computing', 'performance']
  },
  {
    name: 'currency-bitcoin-icon',
    componentName: 'CurrencyBitcoinIcon',
    keywords: ['currency', 'bitcoin', 'crypto', 'btc', 'cryptocurrency', 'money', 'digital']
  },
  {
    name: 'currency-dollar-icon',
    componentName: 'CurrencyDollarIcon',
    keywords: ['currency', 'dollar', 'money', 'finance', 'payment', 'cash', 'usd']
  },
  {
    name: 'currency-ethereum-icon',
    componentName: 'CurrencyEthereumIcon',
    keywords: ['currency', 'ethereum', 'crypto', 'eth', 'cryptocurrency', 'blockchain']
  },
  {
    name: 'currency-euro-icon',
    componentName: 'CurrencyEuroIcon',
    keywords: ['currency', 'euro', 'money', 'finance', 'payment', 'eur', 'europe']
  },
  {
    name: 'currency-rupee-icon',
    componentName: 'CurrencyRupeeIcon',
    keywords: ['currency', 'rupee', 'money', 'finance', 'payment', 'inr', 'india']
  },
  {
    name: 'device-airpods-icon',
    componentName: 'DeviceAirpodsIcon',
    keywords: ['device', 'airpods', 'earbuds', 'audio', 'wireless', 'headphones', 'apple']
  },
  {
    name: 'dialpad-icon',
    componentName: 'DialpadIcon',
    keywords: ['dialpad', 'phone', 'keypad', 'numbers', 'call', 'dial']
  },
  {
    name: 'copy-icon',
    componentName: 'CopyIcon',
    keywords: ['copy', 'clipboard', 'duplicate', 'paste']
  },
  {
    name: 'copy-off-icon',
    componentName: 'CopyOffIcon',
    keywords: ['copy', 'off', 'disabled', 'no copy']
  },
  {
    name: 'double-check-icon',
    componentName: 'DoubleCheckIcon',
    keywords: ['check', 'double', 'read', 'seen']
  },
  {
    name: 'drum-icon',
    componentName: 'DrumIcon',
    keywords: ['drum', 'music', 'instrument', 'percussion', 'beat']
  },
  {
    name: 'dots-horizontal-icon',
    componentName: 'DotsHorizontalIcon',
    keywords: ['dots', 'menu', 'more', 'options', 'horizontal']
  },
  {
    name: 'dots-vertical-icon',
    componentName: 'DotsVerticalIcon',
    keywords: ['dots', 'menu', 'more', 'options', 'vertical']
  },
  {
    name: 'down-chevron-icon',
    componentName: 'DownChevronIcon',
    keywords: ['arrow', 'down', 'expand', 'more']
  },
  {
    name: 'eye-icon',
    componentName: 'EyeIcon',
    keywords: ['eye', 'view', 'see', 'visible', 'watch', 'look']
  },
  {
    name: 'eye-off-icon',
    componentName: 'EyeOffIcon',
    keywords: ['eye', 'off', 'hidden', 'invisible', 'hide', 'privacy', 'password']
  },
  {
    name: 'expand-icon',
    componentName: 'ExpandIcon',
    keywords: ['expand', 'fullscreen', 'maximize', 'enlarge', 'grow']
  },
  {
    name: 'external-link-icon',
    componentName: 'ExternalLinkIcon',
    keywords: ['external', 'link', 'open', 'new', 'window', 'tab', 'out']
  },
  {
    name: 'figma-icon',
    componentName: 'FigmaIcon',
    keywords: ['figma', 'design', 'ui', 'ux', 'prototype']
  },
  {
    name: 'focus-icon',
    componentName: 'FocusIcon',
    keywords: ['focus', 'target', 'aim', 'center', 'concentrate']
  },
  {
    name: 'gauge-icon',
    componentName: 'GaugeIcon',
    keywords: ['gauge', 'meter', 'speed', 'dashboard', 'performance', 'measure']
  },
  {
    name: 'file-description-icon',
    componentName: 'FileDescriptionIcon',
    keywords: ['file', 'document', 'description', 'text', 'paper']
  },
  {
    name: 'flame-icon',
    componentName: 'FlameIcon',
    keywords: ['flame', 'fire', 'hot', 'burn', 'heat']
  },
  {
    name: 'filled-bell-icon',
    componentName: 'FilledBellIcon',
    keywords: ['bell', 'notification', 'alert', 'alarm']
  },
  {
    name: 'filled-checked-icon',
    componentName: 'FilledCheckedIcon',
    keywords: ['check', 'tick', 'success', 'filled', 'done']
  },
  {
    name: 'gear-icon',
    componentName: 'GearIcon',
    keywords: ['gear', 'settings', 'config', 'options']
  },
  {
    name: 'ghost-icon',
    componentName: 'GhostIcon',
    keywords: ['ghost', 'spooky', 'halloween', 'spirit', 'boo']
  },
  {
    name: 'github-icon',
    componentName: 'GithubIcon',
    keywords: ['github', 'git', 'code', 'repository', 'social']
  },
  {
    name: 'github-copilot-icon',
    componentName: 'GithubCopilotIcon',
    keywords: ['github', 'copilot', 'ai', 'code', 'assistant']
  },
  {
    name: 'gitlab-icon',
    componentName: 'GitlabIcon',
    keywords: ['gitlab', 'git', 'code', 'repository', 'devops']
  },
  {
    name: 'hand-heart-icon',
    componentName: 'HandHeartIcon',
    keywords: ['hand', 'heart', 'love', 'care', 'support', 'charity', 'donate']
  },
  {
    name: 'heart-icon',
    componentName: 'HeartIcon',
    keywords: ['heart', 'love', 'favorite', 'like']
  },
  {
    name: 'history-circle-icon',
    componentName: 'HistoryCircleIcon',
    keywords: ['history', 'time', 'clock', 'past', 'rewind']
  },
  {
    name: 'hotel-icon',
    componentName: 'HotelIcon',
    keywords: ['hotel', 'lodging', 'resort', 'vacation', 'travel']
  },
  {
    name: 'info-circle-icon',
    componentName: 'InfoCircleIcon',
    keywords: ['info', 'information', 'circle', 'help', 'about']
  },
  {
    name: 'instagram-icon',
    componentName: 'InstagramIcon',
    keywords: ['instagram', 'social', 'media', 'photo']
  },
  {
    name: 'like-icon',
    componentName: 'LikeIcon',
    keywords: ['like', 'heart', 'love', 'favorite']
  },
  {
    name: 'link-icon',
    componentName: 'LinkIcon',
    keywords: ['link', 'chain', 'url', 'hyperlink', 'connect']
  },
  {
    name: 'lock-icon',
    componentName: 'LockIcon',
    keywords: ['lock', 'secure', 'security', 'password', 'privacy']
  },
  {
    name: 'logout-icon',
    componentName: 'LogoutIcon',
    keywords: ['logout', 'exit', 'signout', 'leave']
  },
  {
    name: 'magnifier-icon',
    componentName: 'MagnifierIcon',
    keywords: ['search', 'find', 'zoom', 'look']
  },
  {
    name: 'mail-filled-icon',
    componentName: 'MailFilledIcon',
    keywords: ['mail', 'email', 'message', 'envelope', 'inbox']
  },
  {
    name: 'meh-icon',
    componentName: 'MehIcon',
    keywords: ['meh', 'neutral', 'indifferent', 'emoji', 'face', 'emoticon']
  },
  {
    name: 'message-circle-icon',
    componentName: 'MessageCircleIcon',
    keywords: ['message', 'chat', 'bubble', 'talk', 'conversation']
  },
  {
    name: 'pen-icon',
    componentName: 'PenIcon',
    keywords: ['pen', 'edit', 'write', 'modify']
  },
  {
    name: 'phone-volume',
    componentName: 'PhoneVolume',
    keywords: ['phone', 'call', 'volume', 'sound']
  },
  {
    name: 'player-icon',
    componentName: 'PlayerIcon',
    keywords: ['play', 'media', 'music', 'video']
  },
  {
    name: 'qrcode-icon',
    componentName: 'QrcodeIcon',
    keywords: ['qr', 'code', 'scan', 'barcode']
  },
  {
    name: 'question-mark',
    componentName: 'QuestionMark',
    keywords: ['question', 'help', 'info', 'faq']
  },
  {
    name: 'rainbow-icon',
    componentName: 'RainbowIcon',
    keywords: ['rainbow', 'color', 'pride', 'arc', 'spectrum']
  },
  {
    name: 'refresh-icon',
    componentName: 'RefreshIcon',
    keywords: ['refresh', 'reload', 'sync', 'update']
  },
  {
    name: 'right-chevron-icon',
    componentName: 'RightChevronIcon',
    keywords: ['arrow', 'right', 'next', 'forward']
  },
  {
    name: 'rocket-icon',
    componentName: 'RocketIcon',
    keywords: ['rocket', 'launch', 'space', 'startup']
  },
  {
    name: 'rosette-discount-icon',
    componentName: 'RosetteDiscountIcon',
    keywords: ['rosette', 'discount', 'price', 'tag', 'sale', 'offer', 'percentage']
  },
  {
    name: 'rosette-discount-check-icon',
    componentName: 'RosetteDiscountCheckIcon',
    keywords: ['rosette', 'discount', 'check', 'badge', 'verified', 'offer', 'sale']
  },
  {
    name: 'scan-heart-icon',
    componentName: 'ScanHeartIcon',
    keywords: ['scan', 'heart', 'health', 'medical', 'monitor', 'focus']
  },
  {
    name: 'send-icon',
    componentName: 'SendIcon',
    keywords: ['send', 'message', 'mail', 'submit']
  },
  {
    name: 'shield-check',
    componentName: 'ShieldCheck',
    keywords: ['shield', 'security', 'safe', 'protect']
  },
  {
    name: 'shopping-cart-icon',
    componentName: 'ShoppingCartIcon',
    keywords: ['cart', 'shopping', 'store', 'buy']
  },
  {
    name: 'simple-checked-icon',
    componentName: 'SimpleCheckedIcon',
    keywords: ['check', 'tick', 'simple', 'done']
  },
  {
    name: 'skull-emoji',
    componentName: 'SkullEmoji',
    keywords: ['skull', 'death', 'danger', 'warning']
  },
  {
    name: 'sparkles-icon',
    componentName: 'SparklesIcon',
    keywords: ['sparkles', 'stars', 'magic', 'shine', 'glitter', 'ai', 'new']
  },
  {
    name: 'telephone-icon',
    componentName: 'TelephoneIcon',
    keywords: ['telephone', 'call', 'phone', 'contact']
  },
  {
    name: 'arrow-down-a-z-icon',
    componentName: 'ArrowDownAZIcon',
    keywords: ['text', 'type', 'font', 'write', 'sort', 'alphabetical']
  },
  {
    name: 'toggle-icon',
    componentName: 'ToggleIcon',
    keywords: ['toggle', 'switch', 'on', 'off']
  },
  {
    name: 'trash-icon',
    componentName: 'TrashIcon',
    keywords: ['trash', 'delete', 'remove', 'bin'],
    customProps: [
      { name: 'shakeOnClick', type: 'boolean', defaultValue: false },
      { name: 'dangerHover', type: 'boolean', defaultValue: false },
      { name: 'keepOpenOnDelete', type: 'boolean', defaultValue: false }
    ]
  },
  {
    name: 'travel-bag',
    componentName: 'TravelBag',
    keywords: ['travel', 'bag', 'luggage', 'suitcase', 'traveling']
  },
  {
    name: 'unordered-list-icon',
    componentName: 'UnorderedListIcon',
    keywords: ['list', 'unordered', 'bullet', 'items', 'menu']
  },
  {
    name: 'user-check-icon',
    componentName: 'UserCheckIcon',
    keywords: ['user', 'check', 'verified', 'approved', 'confirm', 'accept']
  },
  {
    name: 'user-plus-icon',
    componentName: 'UserPlusIcon',
    keywords: ['user', 'plus', 'add', 'new', 'invite', 'create', 'signup']
  },
  {
    name: 'users-icon',
    componentName: 'UsersIcon',
    keywords: ['users', 'people', 'group', 'team', 'community', 'multiple']
  },
  {
    name: 'users-group-icon',
    componentName: 'UsersGroupIcon',
    keywords: ['users', 'group', 'people', 'team', 'community', 'collaboration']
  },
  {
    name: 'vinyl-icon',
    componentName: 'VinylIcon',
    keywords: ['vinyl', 'record', 'music', 'disc', 'retro', 'audio', 'album']
  },
  {
    name: 'washing-machine-icon',
    componentName: 'WashingMachineIcon',
    keywords: ['washing', 'machine', 'laundry', 'clean', 'appliance', 'drum']
  },
  {
    name: 'globe-icon',
    componentName: 'GlobeIcon',
    keywords: ['globe', 'world', 'earth', 'planet']
  },
  {
    name: 'hashtag-icon',
    componentName: 'HashtagIcon',
    keywords: ['hashtag', 'hash', 'tag', 'number', 'symbol', 'social', 'trending']
  },
  {
    name: 'layers-icon',
    componentName: 'LayersIcon',
    keywords: ['layers', 'stack', 'blocks', 'overlap', 'organize', 'group']
  },
  {
    name: 'layout-bottombar-collapse-icon',
    componentName: 'LayoutBottombarCollapseIcon',
    keywords: ['layout', 'bottombar', 'collapse', 'bottom', 'bar', 'panel', 'ui', 'interface']
  },
  {
    name: 'layout-sidebar-right-icon',
    componentName: 'LayoutSidebarRightIcon',
    keywords: ['layout', 'sidebar', 'right', 'panel', 'ui', 'interface', 'navigation']
  },
  {
    name: 'paint-icon',
    componentName: 'PaintIcon',
    keywords: ['paint', 'roller', 'brush', 'color', 'design', 'theme', 'customize']
  },
  {
    name: 'plug-connected-icon',
    componentName: 'PlugConnectedIcon',
    keywords: ['plug', 'connected', 'connection', 'cable', 'power', 'socket', 'electric']
  },
  {
    name: 'plug-connected-x-icon',
    componentName: 'PlugConnectedXIcon',
    keywords: ['plug', 'connected', 'disconnect', 'x', 'connection', 'cable', 'power', 'unplug']
  },
  {
    name: 'stack-icon',
    componentName: 'StackIcon',
    keywords: ['stack', 'layers', 'pile', 'organize', 'group', 'data']
  },
  {
    name: 'stack-3-icon',
    componentName: 'Stack3Icon',
    keywords: ['stack', 'layers', 'three', 'multiple', 'organize', 'group', 'levels']
  },
  {
    name: 'whatsapp-icon',
    componentName: 'WhatsappIcon',
    keywords: ['whatsapp', 'chat', 'message', 'social']
  },
  {
    name: 'world-icon',
    componentName: 'WorldIcon',
    keywords: ['world', 'globe', 'earth', 'planet', 'international', 'global']
  },
  {
    name: 'keyframes-icon',
    componentName: 'KeyframesIcon',
    keywords: ['keyframes', 'animation', 'motion', 'video', 'timeline']
  },
  {
    name: 'wifi-icon',
    componentName: 'WifiIcon',
    keywords: ['wifi', 'wireless', 'internet', 'network', 'signal']
  },
  {
    name: 'wifi-off-icon',
    componentName: 'WifiOffIcon',
    keywords: ['wifi', 'off', 'disconnected', 'no signal', 'network']
  },
  {
    name: 'terminal-icon',
    componentName: 'TerminalIcon',
    keywords: ['terminal', 'console', 'command', 'shell', 'code']
  },
  {
    name: 'twitter-x-icon',
    componentName: 'TwitterXIcon',
    keywords: ['twitter', 'x', 'social', 'media', 'post']
  },
  {
    name: 'x-icon',
    componentName: 'XIcon',
    keywords: ['x', 'close', 'cancel', 'exit', 'dismiss', 'remove']
  },
  {
    name: 'youtube-icon',
    componentName: 'YoutubeIcon',
    keywords: ['youtube', 'video', 'play', 'media', 'social']
  },
  {
    name: 'home-icon',
    componentName: 'HomeIcon',
    keywords: ['home', 'house', 'main', 'dashboard', 'start']
  },
  {
    name: 'star-icon',
    componentName: 'StarIcon',
    keywords: ['star', 'favorite', 'rating', 'bookmark', 'award']
  },
  {
    name: 'facebook-icon',
    componentName: 'FacebookIcon',
    keywords: ['facebook', 'social', 'media', 'meta', 'like']
  },
  {
    name: 'linkedin-icon',
    componentName: 'LinkedinIcon',
    keywords: ['linkedin', 'social', 'professional', 'network', 'job']
  },
  {
    name: 'discord-icon',
    componentName: 'DiscordIcon',
    keywords: ['discord', 'chat', 'gaming', 'community', 'voice']
  },
  {
    name: 'spotify-icon',
    componentName: 'SpotifyIcon',
    keywords: ['spotify', 'music', 'audio', 'streaming', 'sound']
  },
  {
    name: 'pinterest-icon',
    componentName: 'PinterestIcon',
    keywords: ['pinterest', 'social', 'pin', 'board', 'image']
  },
  {
    name: 'javascript-icon',
    componentName: 'JavascriptIcon',
    keywords: ['javascript', 'js', 'code', 'programming', 'web']
  },
  {
    name: 'python-icon',
    componentName: 'PythonIcon',
    keywords: ['python', 'code', 'programming', 'snake', 'language']
  },
  {
    name: 'nodejs-icon',
    componentName: 'NodejsIcon',
    keywords: ['nodejs', 'node', 'javascript', 'server', 'backend']
  },
  {
    name: 'party-popper-icon',
    componentName: 'PartyPopperIcon',
    keywords: ['party', 'popper', 'celebration', 'confetti', 'celebrate']
  },
  {
    name: 'passport-icon',
    componentName: 'PassportIcon',
    keywords: ['international', 'passport', 'travel', 'visa', 'traveling']
  },
  {
    name: 'moon-icon',
    componentName: 'MoonIcon',
    keywords: ['moon', 'dark', 'night', 'theme', 'mode']
  },
  {
    name: 'mouse-pointer-2-icon',
    componentName: 'MousePointer2Icon',
    keywords: ['mouse', 'pointer', 'cursor', 'click', 'select']
  },
  {
    name: 'mysql-icon',
    componentName: 'MysqlIcon',
    keywords: ['mysql', 'database', 'sql', 'db']
  },
  {
    name: 'snapchat-icon',
    componentName: 'SnapchatIcon',
    keywords: ['snapchat', 'social', 'ghost', 'snap', 'chat']
  },
  {
    name: 'slack-icon',
    componentName: 'SlackIcon',
    keywords: ['slack', 'chat', 'team', 'communication', 'work']
  },
  {
    name: 'brand-vercel-icon',
    componentName: 'BrandVercelIcon',
    keywords: ['vercel', 'deploy', 'hosting', 'nextjs', 'triangle']
  },
  {
    name: 'gmail-icon',
    componentName: 'GmailIcon',
    keywords: ['gmail', 'email', 'google', 'mail', 'message']
  },
  {
    name: 'docker-icon',
    componentName: 'DockerIcon',
    keywords: ['docker', 'container', 'devops', 'deployment', 'whale']
  },
  {
    name: 'typescript-icon',
    componentName: 'TypescriptIcon',
    keywords: ['typescript', 'ts', 'code', 'programming', 'javascript']
  },
  {
    name: 'triangle-alert-icon',
    componentName: 'TriangleAlertIcon',
    keywords: ['triangle', 'alert', 'warning', 'caution', 'danger', 'error']
  },
  {
    name: 'truck-electric-icon',
    componentName: 'TruckElectricIcon',
    keywords: ['truck', 'electric', 'vehicle', 'delivery', 'transport', 'ev']
  },
  {
    name: 'twitter-icon',
    componentName: 'TwitterIcon',
    keywords: ['twitter', 'bird', 'social', 'tweet', 'social media']
  },
  {
    name: 'unlink-icon',
    componentName: 'UnlinkIcon',
    keywords: ['unlink', 'disconnect', 'break', 'chain', 'separate', 'detach']
  },
  {
    name: 'volume-2-icon',
    componentName: 'Volume2Icon',
    keywords: ['volume', 'sound', 'audio', 'speaker', 'loud', 'music']
  },
  {
    name: 'volume-x-icon',
    componentName: 'VolumeXIcon',
    keywords: ['volume', 'mute', 'silent', 'sound off', 'audio off', 'quiet']
  },
  {
    name: 'radio-icon',
    componentName: 'RadioIcon',
    keywords: ['radio', 'signal', 'broadcast', 'waves', 'transmission', 'wireless']
  },
  {
    name: 'router-icon',
    componentName: 'RouterIcon',
    keywords: ['router', 'wifi', 'network', 'internet', 'connection', 'modem']
  },
  {
    name: 'satellite-dish-icon',
    componentName: 'SatelliteDishIcon',
    keywords: ['satellite', 'dish', 'antenna', 'signal', 'broadcast', 'communication']
  },
  {
    name: 'scan-barcode-icon',
    componentName: 'ScanBarcodeIcon',
    keywords: ['scan', 'barcode', 'qr', 'code', 'reader', 'scanner']
  },
  {
    name: 'send-horizontal-icon',
    componentName: 'SendHorizontalIcon',
    keywords: ['send', 'horizontal', 'message', 'mail', 'paper plane', 'submit']
  },
  {
    name: 'soup-icon',
    componentName: 'SoupIcon',
    keywords: ['soup', 'bowl', 'food', 'hot', 'steam', 'meal']
  },
  {
    name: 'subscript-icon',
    componentName: 'SubscriptIcon',
    keywords: ['subscript', 'text', 'format', 'typography', 'math', 'chemical']
  },
  {
    name: 'target-icon',
    componentName: 'TargetIcon',
    keywords: ['target', 'aim', 'goal', 'focus', 'bullseye', 'center']
  },
  {
    name: 'layout-sidebar-right-collapse-icon',
    componentName: 'LayoutSidebarRightCollapseIcon',
    keywords: ['layout', 'sidebar', 'right', 'collapse', 'panel', 'ui', 'interface']
  },
  {
    name: 'brand-stripe-icon',
    componentName: 'BrandStripeIcon',
    keywords: ['stripe', 'brand', 'payment', 'money']
  },
  {
    name: 'brand-react-icon',
    componentName: 'BrandReactIcon',
    keywords: ['react', 'brand', 'library', 'javascript']
  },
  {
    name: 'brand-paypal-icon',
    componentName: 'BrandPaypalIcon',
    keywords: ['paypal', 'brand', 'payment', 'money']
  },
  {
    name: 'brand-aws-icon',
    componentName: 'BrandAwsIcon',
    keywords: ['aws', 'brand', 'cloud', 'amazon']
  },
  {
    name: 'brand-bags-fm-icon',
    componentName: 'BrandBagsFmIcon',
    keywords: ['bags', 'fm', 'brand', 'logo', 'shopping', 'ecommerce']
  },
  {
    name: 'brand-threads-icon',
    componentName: 'BrandThreadsIcon',
    keywords: ['threads', 'brand', 'social', 'meta']
  },
  {
    name: 'brand-zoom-icon',
    componentName: 'BrandZoomIcon',
    keywords: ['zoom', 'brand', 'video', 'call']
  },
  {
    name: 'brand-react-native-icon',
    componentName: 'BrandReactNativeIcon',
    keywords: ['react native', 'brand', 'mobile', 'app']
  },
  {
    name: 'brand-openai-icon',
    componentName: 'BrandOpenaiIcon',
    keywords: ['openai', 'brand', 'ai', 'chatgpt']
  },
  {
    name: 'brand-telegram-icon',
    componentName: 'BrandTelegramIcon',
    keywords: ['telegram', 'brand', 'chat', 'message']
  },
  {
    name: 'brand-windows-icon',
    componentName: 'BrandWindowsIcon',
    keywords: ['windows', 'brand', 'microsoft', 'os']
  },
  {
    name: 'golang-icon',
    componentName: 'GolangIcon',
    keywords: ['golang', 'go', 'programming', 'language', 'code', 'developer']
  },
  {
    name: 'brand-railway-icon',
    componentName: 'BrandRailwayIcon',
    keywords: ['railway', 'train', 'transport', 'travel', 'traveling', 'journey', 'cloud']
  },
  {
    name: 'brand-cursor-icon',
    componentName: 'BrandCursorIcon',
    keywords: ['cursor', 'ide', 'code', 'coding', 'cursor-ide']
  },
  {
    name: 'brand-notion-icon',
    componentName: 'BrandNotionIcon',
    keywords: ['notion', 'notion-icon', 'notion-svg', 'docs', 'notes']
  },
  {
    name: 'brand-gemini-icon',
    componentName: 'BrandGeminiIcon',
    keywords: ['gemini', 'gemini-icon', 'ai', 'chatbot', 'conversation']
  },
  {
    name: 'brand-qwen-icon',
    componentName: 'BrandQwenIcon',
    keywords: ['qwen', 'qwen-icon', 'ai', 'chatbot', 'conversation']
  },
  {
    name: 'brand-grok-icon',
    componentName: 'BrandGrokIcon',
    keywords: ['grok', 'grok-icon', 'ai', 'chatbot', 'conversation']
  },
  {
    name: 'bug-icon',
    componentName: 'BugIcon',
    keywords: ['bug', 'insect', 'debug', 'error', 'pest', 'crawl']
  },
  {
    name: 'layout-dashboard-icon',
    componentName: 'LayoutDashboardIcon',
    keywords: ['layout', 'dashboard', 'grid', 'panel', 'widgets', 'admin']
  },
  {
    name: 'user-icon',
    componentName: 'UserIcon',
    keywords: ['user', 'person', 'profile', 'account', 'avatar']
  },
  {
    name: 'wallet-icon',
    componentName: 'WalletIcon',
    keywords: ['wallet', 'money', 'payment', 'finance', 'cash', 'billfold']
  }
].sort((a, b) => a.name.localeCompare(b.name))
export { ICON_LIST }
