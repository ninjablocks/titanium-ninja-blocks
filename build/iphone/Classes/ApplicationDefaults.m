/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"7tT2IhNST7EzjtRelo2ZVhj8ExaGVclZ"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"P7ngcuB8yREO9f3zNg2WPKwT3sij9cGv"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"hBer4RNxxMYWKjlJv87zQJthM6mjlAgt"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"Pr8AXkR57ldh3KvF8eQsXUv1qumu3o3i"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"bbCvGLEOT8o2QOZPRDN1Syz06mDmUKnB"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"IzShnwkV3liyflakoX3Nb2Rnomnk2Rj4"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
