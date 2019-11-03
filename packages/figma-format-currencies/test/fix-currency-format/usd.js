import test from 'ava'
import { fixCurrencyFormat } from '../../src/fix-currency-format/fix-currency-format'

test('$1', function (t) {
  t.is(fixCurrencyFormat('$1', 'en-US'), '$1.00')
  t.is(fixCurrencyFormat('$1,', 'en-US'), '$1.00,')
  t.is(fixCurrencyFormat('X $1', 'en-US'), 'X $1.00')
  t.is(fixCurrencyFormat('X $1 ABC', 'en-US'), 'X $1.00 ABC')
  t.is(fixCurrencyFormat('X $1 ABC DEF', 'en-US'), 'X $1.00 ABC DEF')
  t.is(fixCurrencyFormat('$1 ABC', 'en-US'), '$1.00 ABC')
  t.is(fixCurrencyFormat('$1 ABC DEF', 'en-US'), '$1.00 ABC DEF')
})

test('$1 USD', function (t) {
  t.is(fixCurrencyFormat('$1 USD', 'en-US'), '$1.00 USD')
  t.is(fixCurrencyFormat('$1 USD,', 'en-US'), '$1.00 USD,')
  t.is(fixCurrencyFormat('X $1 USD', 'en-US'), 'X $1.00 USD')
  t.is(fixCurrencyFormat('X $1 USD ABC', 'en-US'), 'X $1.00 USD ABC')
  t.is(fixCurrencyFormat('X $1 USD ABC DEF', 'en-US'), 'X $1.00 USD ABC DEF')
  t.is(fixCurrencyFormat('$1 USD ABC', 'en-US'), '$1.00 USD ABC')
  t.is(fixCurrencyFormat('$1 USD ABC DEF', 'en-US'), '$1.00 USD ABC DEF')
})

test('1 $', function (t) {
  t.is(fixCurrencyFormat('1 $', 'en-US'), '$1.00')
  t.is(fixCurrencyFormat('1 $,', 'en-US'), '$1.00,')
  t.is(fixCurrencyFormat('X 1 $', 'en-US'), 'X $1.00')
  t.is(fixCurrencyFormat('X 1 $ ABC', 'en-US'), 'X $1.00 ABC')
  t.is(fixCurrencyFormat('X 1 $ ABC DEF', 'en-US'), 'X $1.00 ABC DEF')
  t.is(fixCurrencyFormat('1 $ ABC', 'en-US'), '$1.00 ABC')
  t.is(fixCurrencyFormat('1 $ ABC DEF', 'en-US'), '$1.00 ABC DEF')
})

test('1 $ USD', function (t) {
  t.is(fixCurrencyFormat('1 $ USD', 'en-US'), '$1.00 USD')
  t.is(fixCurrencyFormat('1 $ USD,', 'en-US'), '$1.00 USD,')
  t.is(fixCurrencyFormat('X 1 $ USD', 'en-US'), 'X $1.00 USD')
  t.is(fixCurrencyFormat('X 1 $ USD ABC', 'en-US'), 'X $1.00 USD ABC')
  t.is(fixCurrencyFormat('X 1 $ USD ABC DEF', 'en-US'), 'X $1.00 USD ABC DEF')
  t.is(fixCurrencyFormat('1 $ USD ABC', 'en-US'), '$1.00 USD ABC')
  t.is(fixCurrencyFormat('1 $ USD ABC DEF', 'en-US'), '$1.00 USD ABC DEF')
})

test('$3.14', function (t) {
  t.is(fixCurrencyFormat('$3.14', 'en-US'), '$3.14')
  t.is(fixCurrencyFormat('$3.14,', 'en-US'), '$3.14,')
  t.is(fixCurrencyFormat('X $3.14', 'en-US'), 'X $3.14')
  t.is(fixCurrencyFormat('X $3.14 ABC', 'en-US'), 'X $3.14 ABC')
  t.is(fixCurrencyFormat('X $3.14 ABC DEF', 'en-US'), 'X $3.14 ABC DEF')
  t.is(fixCurrencyFormat('$3.14 ABC', 'en-US'), '$3.14 ABC')
  t.is(fixCurrencyFormat('$3.14 ABC DEF', 'en-US'), '$3.14 ABC DEF')
})

test('$3.14 USD', function (t) {
  t.is(fixCurrencyFormat('$3.14 USD', 'en-US'), '$3.14 USD')
  t.is(fixCurrencyFormat('$3.14 USD,', 'en-US'), '$3.14 USD,')
  t.is(fixCurrencyFormat('X $3.14 USD', 'en-US'), 'X $3.14 USD')
  t.is(fixCurrencyFormat('X $3.14 USD ABC', 'en-US'), 'X $3.14 USD ABC')
  t.is(fixCurrencyFormat('X $3.14 USD ABC DEF', 'en-US'), 'X $3.14 USD ABC DEF')
  t.is(fixCurrencyFormat('$3.14 USD ABC', 'en-US'), '$3.14 USD ABC')
  t.is(fixCurrencyFormat('$3.14 USD ABC DEF', 'en-US'), '$3.14 USD ABC DEF')
})

test('3,14 $', function (t) {
  t.is(fixCurrencyFormat('3,14 $', 'en-US'), '$3.14')
  t.is(fixCurrencyFormat('3,14 $,', 'en-US'), '$3.14,')
  t.is(fixCurrencyFormat('X 3,14 $', 'en-US'), 'X $3.14')
  t.is(fixCurrencyFormat('X 3,14 $ ABC', 'en-US'), 'X $3.14 ABC')
  t.is(fixCurrencyFormat('X 3,14 $ ABC DEF', 'en-US'), 'X $3.14 ABC DEF')
  t.is(fixCurrencyFormat('3,14 $ ABC', 'en-US'), '$3.14 ABC')
  t.is(fixCurrencyFormat('3,14 $ ABC DEF', 'en-US'), '$3.14 ABC DEF')
})

test('3,14 $ USD', function (t) {
  t.is(fixCurrencyFormat('3,14 $ USD', 'en-US'), '$3.14 USD')
  t.is(fixCurrencyFormat('3,14 $ USD,', 'en-US'), '$3.14 USD,')
  t.is(fixCurrencyFormat('X 3,14 $ USD', 'en-US'), 'X $3.14 USD')
  t.is(fixCurrencyFormat('X 3,14 $ USD ABC', 'en-US'), 'X $3.14 USD ABC')
  t.is(
    fixCurrencyFormat('X 3,14 $ USD ABC DEF', 'en-US'),
    'X $3.14 USD ABC DEF'
  )
  t.is(fixCurrencyFormat('3,14 $ USD ABC', 'en-US'), '$3.14 USD ABC')
  t.is(fixCurrencyFormat('3,14 $ USD ABC DEF', 'en-US'), '$3.14 USD ABC DEF')
})

test('$123,456.78', function (t) {
  t.is(fixCurrencyFormat('$123,456.78', 'en-US'), '$123,456.78')
  t.is(fixCurrencyFormat('$123,456.78,', 'en-US'), '$123,456.78,')
  t.is(fixCurrencyFormat('X $123,456.78', 'en-US'), 'X $123,456.78')
  t.is(fixCurrencyFormat('X $123,456.78 ABC', 'en-US'), 'X $123,456.78 ABC')
  t.is(
    fixCurrencyFormat('X $123,456.78 ABC DEF', 'en-US'),
    'X $123,456.78 ABC DEF'
  )
  t.is(fixCurrencyFormat('$123,456.78 ABC', 'en-US'), '$123,456.78 ABC')
  t.is(fixCurrencyFormat('$123,456.78 ABC DEF', 'en-US'), '$123,456.78 ABC DEF')
})

test('$123,456.78 USD', function (t) {
  t.is(fixCurrencyFormat('$123,456.78 USD', 'en-US'), '$123,456.78 USD')
  t.is(fixCurrencyFormat('$123,456.78 USD,', 'en-US'), '$123,456.78 USD,')
  t.is(fixCurrencyFormat('X $123,456.78 USD', 'en-US'), 'X $123,456.78 USD')
  t.is(
    fixCurrencyFormat('X $123,456.78 USD ABC', 'en-US'),
    'X $123,456.78 USD ABC'
  )
  t.is(
    fixCurrencyFormat('X $123,456.78 USD ABC DEF', 'en-US'),
    'X $123,456.78 USD ABC DEF'
  )
  t.is(fixCurrencyFormat('$123,456.78 USD ABC', 'en-US'), '$123,456.78 USD ABC')
  t.is(
    fixCurrencyFormat('$123,456.78 USD ABC DEF', 'en-US'),
    '$123,456.78 USD ABC DEF'
  )
})

test('123.456,78 $', function (t) {
  t.is(fixCurrencyFormat('123.456,78 $', 'en-US'), '$123,456.78')
  t.is(fixCurrencyFormat('123.456,78 $,', 'en-US'), '$123,456.78,')
  t.is(fixCurrencyFormat('X 123.456,78 $', 'en-US'), 'X $123,456.78')
  t.is(fixCurrencyFormat('X 123.456,78 $ ABC', 'en-US'), 'X $123,456.78 ABC')
  t.is(
    fixCurrencyFormat('X 123.456,78 $ ABC DEF', 'en-US'),
    'X $123,456.78 ABC DEF'
  )
  t.is(fixCurrencyFormat('123.456,78 $ ABC', 'en-US'), '$123,456.78 ABC')
  t.is(
    fixCurrencyFormat('123.456,78 $ ABC DEF', 'en-US'),
    '$123,456.78 ABC DEF'
  )
})

test('123.456,78 $ USD', function (t) {
  t.is(fixCurrencyFormat('123.456,78 $ USD', 'en-US'), '$123,456.78 USD')
  t.is(fixCurrencyFormat('123.456,78 $ USD,', 'en-US'), '$123,456.78 USD,')
  t.is(fixCurrencyFormat('X 123.456,78 $ USD', 'en-US'), 'X $123,456.78 USD')
  t.is(
    fixCurrencyFormat('X 123.456,78 $ USD ABC', 'en-US'),
    'X $123,456.78 USD ABC'
  )
  t.is(
    fixCurrencyFormat('X 123.456,78 $ USD ABC DEF', 'en-US'),
    'X $123,456.78 USD ABC DEF'
  )
  t.is(
    fixCurrencyFormat('123.456,78 $ USD ABC', 'en-US'),
    '$123,456.78 USD ABC'
  )
  t.is(
    fixCurrencyFormat('123.456,78 $ USD ABC DEF', 'en-US'),
    '$123,456.78 USD ABC DEF'
  )
})

test('$12,345,678.90', function (t) {
  t.is(fixCurrencyFormat('$12,345,678.90', 'en-US'), '$12,345,678.90')
  t.is(fixCurrencyFormat('$12,345,678.90,', 'en-US'), '$12,345,678.90,')
  t.is(fixCurrencyFormat('X $12,345,678.90', 'en-US'), 'X $12,345,678.90')
  t.is(
    fixCurrencyFormat('X $12,345,678.90 ABC', 'en-US'),
    'X $12,345,678.90 ABC'
  )
  t.is(
    fixCurrencyFormat('X $12,345,678.90 ABC DEF', 'en-US'),
    'X $12,345,678.90 ABC DEF'
  )
  t.is(fixCurrencyFormat('$12,345,678.90 ABC', 'en-US'), '$12,345,678.90 ABC')
  t.is(
    fixCurrencyFormat('$12,345,678.90 ABC DEF', 'en-US'),
    '$12,345,678.90 ABC DEF'
  )
})

test('$12,345,678.90 USD', function (t) {
  t.is(fixCurrencyFormat('$12,345,678.90 USD', 'en-US'), '$12,345,678.90 USD')
  t.is(fixCurrencyFormat('$12,345,678.90 USD,', 'en-US'), '$12,345,678.90 USD,')
  t.is(
    fixCurrencyFormat('X $12,345,678.90 USD', 'en-US'),
    'X $12,345,678.90 USD'
  )
  t.is(
    fixCurrencyFormat('X $12,345,678.90 USD ABC', 'en-US'),
    'X $12,345,678.90 USD ABC'
  )
  t.is(
    fixCurrencyFormat('X $12,345,678.90 USD ABC DEF', 'en-US'),
    'X $12,345,678.90 USD ABC DEF'
  )
  t.is(
    fixCurrencyFormat('$12,345,678.90 USD ABC', 'en-US'),
    '$12,345,678.90 USD ABC'
  )
  t.is(
    fixCurrencyFormat('$12,345,678.90 USD ABC DEF', 'en-US'),
    '$12,345,678.90 USD ABC DEF'
  )
})

test('12.345.678,90 $', function (t) {
  t.is(fixCurrencyFormat('12.345.678,90 $', 'en-US'), '$12,345,678.90')
  t.is(fixCurrencyFormat('12.345.678,90 $,', 'en-US'), '$12,345,678.90,')
  t.is(fixCurrencyFormat('X 12.345.678,90 $', 'en-US'), 'X $12,345,678.90')
  t.is(
    fixCurrencyFormat('X 12.345.678,90 $ ABC', 'en-US'),
    'X $12,345,678.90 ABC'
  )
  t.is(
    fixCurrencyFormat('X 12.345.678,90 $ ABC DEF', 'en-US'),
    'X $12,345,678.90 ABC DEF'
  )
  t.is(fixCurrencyFormat('12.345.678,90 $ ABC', 'en-US'), '$12,345,678.90 ABC')
  t.is(
    fixCurrencyFormat('12.345.678,90 $ ABC DEF', 'en-US'),
    '$12,345,678.90 ABC DEF'
  )
})

test('12.345.678,90 $ USD', function (t) {
  t.is(fixCurrencyFormat('12.345.678,90 $ USD', 'en-US'), '$12,345,678.90 USD')
  t.is(
    fixCurrencyFormat('12.345.678,90 $ USD,', 'en-US'),
    '$12,345,678.90 USD,'
  )
  t.is(
    fixCurrencyFormat('X 12.345.678,90 $ USD', 'en-US'),
    'X $12,345,678.90 USD'
  )
  t.is(
    fixCurrencyFormat('X 12.345.678,90 $ USD ABC', 'en-US'),
    'X $12,345,678.90 USD ABC'
  )
  t.is(
    fixCurrencyFormat('X 12.345.678,90 $ USD ABC DEF', 'en-US'),
    'X $12,345,678.90 USD ABC DEF'
  )
  t.is(
    fixCurrencyFormat('12.345.678,90 $ USD ABC', 'en-US'),
    '$12,345,678.90 USD ABC'
  )
  t.is(
    fixCurrencyFormat('12.345.678,90 $ USD ABC DEF', 'en-US'),
    '$12,345,678.90 USD ABC DEF'
  )
})