from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

SHOW_STOCK_ONLY = (By.ID, 'search_stock')
SEARCH = (By.ID, 'search_prod')

def open_homepage(context):
    url = context.url
    browser = context.browser
    browser.get(url)
    wait = WebDriverWait(browser, 10)

    wait.until(EC.title_is('React App'))
    browser.save_screenshot('homepage.png')


def show_prod_with_stock_only(context):
    browser = context.browser
    wait = WebDriverWait(browser, 10)

    # tbx_input = wait.until(EC.presence_of_element_located(SEARCH))
    tbx_input = browser.find_element_by_id('search_prod')
    tbx_input.send_keys('Fred is a good guy.')

    # check_box = browser.find_element_by_name('stock')
    # check_box = browser.find_element_by_name('stock')
    # check_box.click()
    browser.save_screenshot('search.png')

    # check_box = wait.until(EC.visibility_of_element_located(SHOW_STOCK_ONLY))
    # check_box.click()

    # wait.until(EC.title_is('sdfd'),50)