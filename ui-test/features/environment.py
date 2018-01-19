from selenium import webdriver




def before_all(context):
    browser = webdriver.PhantomJS("/Users/juandu/Downloads/phantomjs")
    browser.maximize_window()
    # context.browser = webdriver.Chrome("/Users/juandu/Downloads/chromedriver")
    context.browser = browser
    context.url = 'http://localhost:3000/'

def before_step(context, step):
    pass


def after_step(context, step):
    pass

def after_all(context):
    context.browser.quit()