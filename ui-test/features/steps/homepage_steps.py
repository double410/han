import behave
from pages import homepage


@behave.given('I opened the homepage')
def step_impl(context):
    homepage.open_homepage(context)


@behave.when('selected the check box "only show products in stock"')
def step_impl(context):
    homepage.show_prod_with_stock_only(context)


@behave.then('I can not see the products without stock')
def step_impl(context):
    pass
