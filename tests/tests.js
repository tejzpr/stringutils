QUnit.test( "isEmpty", function( assert ) {
	assert.equal( true, su.isEmpty(null));
	assert.equal( true, su.isEmpty(""));
	assert.equal( false,su.isEmpty(" "));
	assert.equal( false,su.isEmpty("bob"));
	assert.equal( false,su.isEmpty("  bob  "));
});

QUnit.test( "isNotEmpty", function( assert ) {
	assert.equal( false, su.isNotEmpty(null));
	assert.equal( false, su.isNotEmpty(""));
	assert.equal( true,su.isNotEmpty(" "));
	assert.equal( true,su.isNotEmpty("bob"));
	assert.equal( true,su.isNotEmpty("  bob  "));
});

QUnit.test( "isBlank", function( assert ) {
	assert.equal( true, su.isBlank(null));
	assert.equal( true, su.isBlank(""));
	assert.equal( true,su.isBlank(" "));
	assert.equal( false,su.isBlank("bob"));
	assert.equal( false,su.isBlank("  bob  "));
});

QUnit.test( "isNotBlank", function( assert ) {
	assert.equal( false, su.isNotBlank(null));
	assert.equal( false, su.isNotBlank(""));
	assert.equal( false,su.isNotBlank(" "));
	assert.equal( true,su.isNotBlank("bob"));
	assert.equal( true,su.isNotBlank("  bob  "));
});

QUnit.test( "clean", function( assert ) {
	assert.equal("",su.clean(null));
	assert.equal("",su.clean(""));
	assert.equal("abc",su.clean("abc"));
	assert.equal("abc",su.clean("    abc    "));
	assert.equal("",su.clean("     "));
});

QUnit.test( "trim", function( assert ) {
	assert.equal(null,su.trim(null));
	assert.equal("",su.trim(""));
	assert.equal("",su.trim("   "));
	assert.equal("abc",su.trim("abc"));
	assert.equal("abc",su.trim("    abc    "));
});

QUnit.test( "trimToNull", function( assert ) {
	assert.equal(null,su.trimToNull(null));
	assert.equal(null,su.trimToNull(""));
	assert.equal(null,su.trimToNull("   "));
	assert.equal("abc",su.trimToNull("abc"));
	assert.equal("abc",su.trimToNull("    abc    "));
});

QUnit.test( "trimToEmpty", function( assert ) {
	assert.equal("",su.trimToEmpty(null));
	assert.equal("",su.trimToEmpty(""));
	assert.equal("",su.trimToEmpty("   "));
	assert.equal("abc",su.trimToEmpty("abc"));
	assert.equal("abc",su.trimToEmpty("    abc    "));
});


QUnit.test( "replace", function( assert ) {
    assert.equal("abaa",su.replace("abaa", "a", null, -1));
    assert.equal("b",su.replace("abaa", "a", "", -1));  
    assert.equal("abaa",su.replace("abaa", "a", "z", 0)); 
    assert.equal("zbaa",su.replace("abaa", "a", "z", 1)); 
    assert.equal("zbza",su.replace("abaa", "a", "z", 2)); 
    assert.equal("zbzz",su.replace("abaa", "a", "z", -1)); 
});