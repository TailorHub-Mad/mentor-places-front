/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  GraphQLBigInt: { input: any; output: any }
  GraphQLStringOrFloat: { input: any; output: any }
  Hash: { input: any; output: any }
  JSON: { input: any; output: any }
}

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation'
  create_allowed_setting_value_item?: Maybe<Allowed_Setting_Value>
  create_allowed_setting_value_items: Array<Allowed_Setting_Value>
  create_bilinguals_item?: Maybe<Bilinguals>
  create_bilinguals_items: Array<Bilinguals>
  create_blocks_item?: Maybe<Blocks>
  create_blocks_items: Array<Blocks>
  create_campuses_courses_item?: Maybe<Campuses_Courses>
  create_campuses_courses_items: Array<Campuses_Courses>
  create_campuses_item?: Maybe<Campuses>
  create_campuses_items: Array<Campuses>
  create_category_courses_item?: Maybe<Category_Courses>
  create_category_courses_items: Array<Category_Courses>
  create_category_posts_item?: Maybe<Category_Posts>
  create_category_posts_items: Array<Category_Posts>
  create_course_languages_item?: Maybe<Course_Languages>
  create_course_languages_items: Array<Course_Languages>
  create_courses_category_courses_item?: Maybe<Courses_Category_Courses>
  create_courses_category_courses_items: Array<Courses_Category_Courses>
  create_courses_item?: Maybe<Courses>
  create_courses_items: Array<Courses>
  create_courses_tag_courses_item?: Maybe<Courses_Tag_Courses>
  create_courses_tag_courses_items: Array<Courses_Tag_Courses>
  create_courses_translations_item?: Maybe<Courses_Translations>
  create_courses_translations_items: Array<Courses_Translations>
  create_folders_item?: Maybe<Folders>
  create_folders_items: Array<Folders>
  create_institutions_item?: Maybe<Institutions>
  create_institutions_items: Array<Institutions>
  create_institutions_scholarships_courses_item?: Maybe<Institutions_Scholarships_Courses>
  create_institutions_scholarships_courses_items: Array<Institutions_Scholarships_Courses>
  create_institutions_tag_institutions_item?: Maybe<Institutions_Tag_Institutions>
  create_institutions_tag_institutions_items: Array<Institutions_Tag_Institutions>
  create_languages_item?: Maybe<Languages>
  create_languages_items: Array<Languages>
  create_menu_items_courses_item?: Maybe<Menu_Items_Courses>
  create_menu_items_courses_items: Array<Menu_Items_Courses>
  create_menu_items_item?: Maybe<Menu_Items>
  create_menu_items_items: Array<Menu_Items>
  create_menu_items_pages_item?: Maybe<Menu_Items_Pages>
  create_menu_items_pages_items: Array<Menu_Items_Pages>
  create_menus_item?: Maybe<Menus>
  create_menus_items: Array<Menus>
  create_page_blocks_item?: Maybe<Page_Blocks>
  create_page_blocks_items: Array<Page_Blocks>
  create_pages_item?: Maybe<Pages>
  create_pages_items: Array<Pages>
  create_posts_category_posts_item?: Maybe<Posts_Category_Posts>
  create_posts_category_posts_items: Array<Posts_Category_Posts>
  create_posts_item?: Maybe<Posts>
  create_posts_items: Array<Posts>
  create_posts_tag_posts_item?: Maybe<Posts_Tag_Posts>
  create_posts_tag_posts_items: Array<Posts_Tag_Posts>
  create_profiles_item?: Maybe<Profiles>
  create_profiles_items: Array<Profiles>
  create_questions_item?: Maybe<Questions>
  create_questions_items: Array<Questions>
  create_reports_item?: Maybe<Reports>
  create_reports_items: Array<Reports>
  create_reports_questions_item?: Maybe<Reports_Questions>
  create_reports_questions_items: Array<Reports_Questions>
  create_scholarships_item?: Maybe<Scholarships>
  create_scholarships_items: Array<Scholarships>
  create_seo_template_block_item?: Maybe<Seo_Template_Block>
  create_seo_template_block_items: Array<Seo_Template_Block>
  create_seo_template_item?: Maybe<Seo_Template>
  create_seo_template_items: Array<Seo_Template>
  create_settings_item?: Maybe<Settings>
  create_settings_items: Array<Settings>
  create_tag_courses_item?: Maybe<Tag_Courses>
  create_tag_courses_items: Array<Tag_Courses>
  create_tag_institutions_item?: Maybe<Tag_Institutions>
  create_tag_institutions_items: Array<Tag_Institutions>
  create_tag_posts_item?: Maybe<Tag_Posts>
  create_tag_posts_items: Array<Tag_Posts>
  create_test_item?: Maybe<Test>
  create_test_items: Array<Test>
  create_user_setting_item?: Maybe<User_Setting>
  create_user_setting_items: Array<User_Setting>
  create_users_item?: Maybe<Users>
  create_users_items: Array<Users>
  delete_allowed_setting_value_item?: Maybe<Delete_One>
  delete_allowed_setting_value_items?: Maybe<Delete_Many>
  delete_bilinguals_item?: Maybe<Delete_One>
  delete_bilinguals_items?: Maybe<Delete_Many>
  delete_blocks_item?: Maybe<Delete_One>
  delete_blocks_items?: Maybe<Delete_Many>
  delete_campuses_courses_item?: Maybe<Delete_One>
  delete_campuses_courses_items?: Maybe<Delete_Many>
  delete_campuses_item?: Maybe<Delete_One>
  delete_campuses_items?: Maybe<Delete_Many>
  delete_category_courses_item?: Maybe<Delete_One>
  delete_category_courses_items?: Maybe<Delete_Many>
  delete_category_posts_item?: Maybe<Delete_One>
  delete_category_posts_items?: Maybe<Delete_Many>
  delete_course_languages_item?: Maybe<Delete_One>
  delete_course_languages_items?: Maybe<Delete_Many>
  delete_courses_category_courses_item?: Maybe<Delete_One>
  delete_courses_category_courses_items?: Maybe<Delete_Many>
  delete_courses_item?: Maybe<Delete_One>
  delete_courses_items?: Maybe<Delete_Many>
  delete_courses_tag_courses_item?: Maybe<Delete_One>
  delete_courses_tag_courses_items?: Maybe<Delete_Many>
  delete_courses_translations_item?: Maybe<Delete_One>
  delete_courses_translations_items?: Maybe<Delete_Many>
  delete_folders_item?: Maybe<Delete_One>
  delete_folders_items?: Maybe<Delete_Many>
  delete_institutions_item?: Maybe<Delete_One>
  delete_institutions_items?: Maybe<Delete_Many>
  delete_institutions_scholarships_courses_item?: Maybe<Delete_One>
  delete_institutions_scholarships_courses_items?: Maybe<Delete_Many>
  delete_institutions_tag_institutions_item?: Maybe<Delete_One>
  delete_institutions_tag_institutions_items?: Maybe<Delete_Many>
  delete_languages_item?: Maybe<Delete_One>
  delete_languages_items?: Maybe<Delete_Many>
  delete_menu_items_courses_item?: Maybe<Delete_One>
  delete_menu_items_courses_items?: Maybe<Delete_Many>
  delete_menu_items_item?: Maybe<Delete_One>
  delete_menu_items_items?: Maybe<Delete_Many>
  delete_menu_items_pages_item?: Maybe<Delete_One>
  delete_menu_items_pages_items?: Maybe<Delete_Many>
  delete_menus_item?: Maybe<Delete_One>
  delete_menus_items?: Maybe<Delete_Many>
  delete_page_blocks_item?: Maybe<Delete_One>
  delete_page_blocks_items?: Maybe<Delete_Many>
  delete_pages_item?: Maybe<Delete_One>
  delete_pages_items?: Maybe<Delete_Many>
  delete_posts_category_posts_item?: Maybe<Delete_One>
  delete_posts_category_posts_items?: Maybe<Delete_Many>
  delete_posts_item?: Maybe<Delete_One>
  delete_posts_items?: Maybe<Delete_Many>
  delete_posts_tag_posts_item?: Maybe<Delete_One>
  delete_posts_tag_posts_items?: Maybe<Delete_Many>
  delete_profiles_item?: Maybe<Delete_One>
  delete_profiles_items?: Maybe<Delete_Many>
  delete_questions_item?: Maybe<Delete_One>
  delete_questions_items?: Maybe<Delete_Many>
  delete_reports_item?: Maybe<Delete_One>
  delete_reports_items?: Maybe<Delete_Many>
  delete_reports_questions_item?: Maybe<Delete_One>
  delete_reports_questions_items?: Maybe<Delete_Many>
  delete_scholarships_item?: Maybe<Delete_One>
  delete_scholarships_items?: Maybe<Delete_Many>
  delete_seo_template_block_item?: Maybe<Delete_One>
  delete_seo_template_block_items?: Maybe<Delete_Many>
  delete_seo_template_item?: Maybe<Delete_One>
  delete_seo_template_items?: Maybe<Delete_Many>
  delete_settings_item?: Maybe<Delete_One>
  delete_settings_items?: Maybe<Delete_Many>
  delete_tag_courses_item?: Maybe<Delete_One>
  delete_tag_courses_items?: Maybe<Delete_Many>
  delete_tag_institutions_item?: Maybe<Delete_One>
  delete_tag_institutions_items?: Maybe<Delete_Many>
  delete_tag_posts_item?: Maybe<Delete_One>
  delete_tag_posts_items?: Maybe<Delete_Many>
  delete_test_item?: Maybe<Delete_One>
  delete_test_items?: Maybe<Delete_Many>
  delete_user_setting_item?: Maybe<Delete_One>
  delete_user_setting_items?: Maybe<Delete_Many>
  delete_users_item?: Maybe<Delete_One>
  delete_users_items?: Maybe<Delete_Many>
  update_allowed_setting_value_batch: Array<Allowed_Setting_Value>
  update_allowed_setting_value_item?: Maybe<Allowed_Setting_Value>
  update_allowed_setting_value_items: Array<Allowed_Setting_Value>
  update_bilinguals_batch: Array<Bilinguals>
  update_bilinguals_item?: Maybe<Bilinguals>
  update_bilinguals_items: Array<Bilinguals>
  update_blocks_batch: Array<Blocks>
  update_blocks_item?: Maybe<Blocks>
  update_blocks_items: Array<Blocks>
  update_campuses_batch: Array<Campuses>
  update_campuses_courses_batch: Array<Campuses_Courses>
  update_campuses_courses_item?: Maybe<Campuses_Courses>
  update_campuses_courses_items: Array<Campuses_Courses>
  update_campuses_item?: Maybe<Campuses>
  update_campuses_items: Array<Campuses>
  update_category_courses_batch: Array<Category_Courses>
  update_category_courses_item?: Maybe<Category_Courses>
  update_category_courses_items: Array<Category_Courses>
  update_category_posts_batch: Array<Category_Posts>
  update_category_posts_item?: Maybe<Category_Posts>
  update_category_posts_items: Array<Category_Posts>
  update_course_languages_batch: Array<Course_Languages>
  update_course_languages_item?: Maybe<Course_Languages>
  update_course_languages_items: Array<Course_Languages>
  update_courses_batch: Array<Courses>
  update_courses_category_courses_batch: Array<Courses_Category_Courses>
  update_courses_category_courses_item?: Maybe<Courses_Category_Courses>
  update_courses_category_courses_items: Array<Courses_Category_Courses>
  update_courses_item?: Maybe<Courses>
  update_courses_items: Array<Courses>
  update_courses_tag_courses_batch: Array<Courses_Tag_Courses>
  update_courses_tag_courses_item?: Maybe<Courses_Tag_Courses>
  update_courses_tag_courses_items: Array<Courses_Tag_Courses>
  update_courses_translations_batch: Array<Courses_Translations>
  update_courses_translations_item?: Maybe<Courses_Translations>
  update_courses_translations_items: Array<Courses_Translations>
  update_folders_batch: Array<Folders>
  update_folders_item?: Maybe<Folders>
  update_folders_items: Array<Folders>
  update_institutions_batch: Array<Institutions>
  update_institutions_item?: Maybe<Institutions>
  update_institutions_items: Array<Institutions>
  update_institutions_scholarships_courses_batch: Array<Institutions_Scholarships_Courses>
  update_institutions_scholarships_courses_item?: Maybe<Institutions_Scholarships_Courses>
  update_institutions_scholarships_courses_items: Array<Institutions_Scholarships_Courses>
  update_institutions_tag_institutions_batch: Array<Institutions_Tag_Institutions>
  update_institutions_tag_institutions_item?: Maybe<Institutions_Tag_Institutions>
  update_institutions_tag_institutions_items: Array<Institutions_Tag_Institutions>
  update_languages_batch: Array<Languages>
  update_languages_item?: Maybe<Languages>
  update_languages_items: Array<Languages>
  update_menu_items_batch: Array<Menu_Items>
  update_menu_items_courses_batch: Array<Menu_Items_Courses>
  update_menu_items_courses_item?: Maybe<Menu_Items_Courses>
  update_menu_items_courses_items: Array<Menu_Items_Courses>
  update_menu_items_item?: Maybe<Menu_Items>
  update_menu_items_items: Array<Menu_Items>
  update_menu_items_pages_batch: Array<Menu_Items_Pages>
  update_menu_items_pages_item?: Maybe<Menu_Items_Pages>
  update_menu_items_pages_items: Array<Menu_Items_Pages>
  update_menus_batch: Array<Menus>
  update_menus_item?: Maybe<Menus>
  update_menus_items: Array<Menus>
  update_page_blocks_batch: Array<Page_Blocks>
  update_page_blocks_item?: Maybe<Page_Blocks>
  update_page_blocks_items: Array<Page_Blocks>
  update_pages_batch: Array<Pages>
  update_pages_item?: Maybe<Pages>
  update_pages_items: Array<Pages>
  update_posts_batch: Array<Posts>
  update_posts_category_posts_batch: Array<Posts_Category_Posts>
  update_posts_category_posts_item?: Maybe<Posts_Category_Posts>
  update_posts_category_posts_items: Array<Posts_Category_Posts>
  update_posts_item?: Maybe<Posts>
  update_posts_items: Array<Posts>
  update_posts_tag_posts_batch: Array<Posts_Tag_Posts>
  update_posts_tag_posts_item?: Maybe<Posts_Tag_Posts>
  update_posts_tag_posts_items: Array<Posts_Tag_Posts>
  update_profiles_batch: Array<Profiles>
  update_profiles_item?: Maybe<Profiles>
  update_profiles_items: Array<Profiles>
  update_questions_batch: Array<Questions>
  update_questions_item?: Maybe<Questions>
  update_questions_items: Array<Questions>
  update_reports_batch: Array<Reports>
  update_reports_item?: Maybe<Reports>
  update_reports_items: Array<Reports>
  update_reports_questions_batch: Array<Reports_Questions>
  update_reports_questions_item?: Maybe<Reports_Questions>
  update_reports_questions_items: Array<Reports_Questions>
  update_scholarships_batch: Array<Scholarships>
  update_scholarships_item?: Maybe<Scholarships>
  update_scholarships_items: Array<Scholarships>
  update_seo_template_batch: Array<Seo_Template>
  update_seo_template_block_batch: Array<Seo_Template_Block>
  update_seo_template_block_item?: Maybe<Seo_Template_Block>
  update_seo_template_block_items: Array<Seo_Template_Block>
  update_seo_template_item?: Maybe<Seo_Template>
  update_seo_template_items: Array<Seo_Template>
  update_settings_batch: Array<Settings>
  update_settings_item?: Maybe<Settings>
  update_settings_items: Array<Settings>
  update_tag_courses_batch: Array<Tag_Courses>
  update_tag_courses_item?: Maybe<Tag_Courses>
  update_tag_courses_items: Array<Tag_Courses>
  update_tag_institutions_batch: Array<Tag_Institutions>
  update_tag_institutions_item?: Maybe<Tag_Institutions>
  update_tag_institutions_items: Array<Tag_Institutions>
  update_tag_posts_batch: Array<Tag_Posts>
  update_tag_posts_item?: Maybe<Tag_Posts>
  update_tag_posts_items: Array<Tag_Posts>
  update_test_batch: Array<Test>
  update_test_item?: Maybe<Test>
  update_test_items: Array<Test>
  update_user_setting_batch: Array<User_Setting>
  update_user_setting_item?: Maybe<User_Setting>
  update_user_setting_items: Array<User_Setting>
  update_users_batch: Array<Users>
  update_users_item?: Maybe<Users>
  update_users_items: Array<Users>
}

export type MutationCreate_Allowed_Setting_Value_ItemArgs = {
  data: Create_Allowed_Setting_Value_Input
}

export type MutationCreate_Allowed_Setting_Value_ItemsArgs = {
  data?: InputMaybe<Array<Create_Allowed_Setting_Value_Input>>
  filter?: InputMaybe<Allowed_Setting_Value_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Bilinguals_ItemArgs = {
  data: Create_Bilinguals_Input
}

export type MutationCreate_Bilinguals_ItemsArgs = {
  data?: InputMaybe<Array<Create_Bilinguals_Input>>
  filter?: InputMaybe<Bilinguals_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Blocks_ItemArgs = {
  data: Create_Blocks_Input
}

export type MutationCreate_Blocks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Blocks_Input>>
  filter?: InputMaybe<Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Campuses_Courses_ItemArgs = {
  data: Create_Campuses_Courses_Input
}

export type MutationCreate_Campuses_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Campuses_Courses_Input>>
  filter?: InputMaybe<Campuses_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Campuses_ItemArgs = {
  data: Create_Campuses_Input
}

export type MutationCreate_Campuses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Campuses_Input>>
  filter?: InputMaybe<Campuses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Category_Courses_ItemArgs = {
  data: Create_Category_Courses_Input
}

export type MutationCreate_Category_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Category_Courses_Input>>
  filter?: InputMaybe<Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Category_Posts_ItemArgs = {
  data: Create_Category_Posts_Input
}

export type MutationCreate_Category_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Category_Posts_Input>>
  filter?: InputMaybe<Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Course_Languages_ItemArgs = {
  data: Create_Course_Languages_Input
}

export type MutationCreate_Course_Languages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Course_Languages_Input>>
  filter?: InputMaybe<Course_Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_Category_Courses_ItemArgs = {
  data: Create_Courses_Category_Courses_Input
}

export type MutationCreate_Courses_Category_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Category_Courses_Input>>
  filter?: InputMaybe<Courses_Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_ItemArgs = {
  data: Create_Courses_Input
}

export type MutationCreate_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Input>>
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_Tag_Courses_ItemArgs = {
  data: Create_Courses_Tag_Courses_Input
}

export type MutationCreate_Courses_Tag_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Tag_Courses_Input>>
  filter?: InputMaybe<Courses_Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_Translations_ItemArgs = {
  data: Create_Courses_Translations_Input
}

export type MutationCreate_Courses_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Translations_Input>>
  filter?: InputMaybe<Courses_Translations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Folders_ItemArgs = {
  data: Create_Folders_Input
}

export type MutationCreate_Folders_ItemsArgs = {
  data?: InputMaybe<Array<Create_Folders_Input>>
  filter?: InputMaybe<Folders_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Institutions_ItemArgs = {
  data: Create_Institutions_Input
}

export type MutationCreate_Institutions_ItemsArgs = {
  data?: InputMaybe<Array<Create_Institutions_Input>>
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Institutions_Scholarships_Courses_ItemArgs = {
  data: Create_Institutions_Scholarships_Courses_Input
}

export type MutationCreate_Institutions_Scholarships_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Institutions_Scholarships_Courses_Input>>
  filter?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Institutions_Tag_Institutions_ItemArgs = {
  data: Create_Institutions_Tag_Institutions_Input
}

export type MutationCreate_Institutions_Tag_Institutions_ItemsArgs = {
  data?: InputMaybe<Array<Create_Institutions_Tag_Institutions_Input>>
  filter?: InputMaybe<Institutions_Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Languages_ItemArgs = {
  data: Create_Languages_Input
}

export type MutationCreate_Languages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Languages_Input>>
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Menu_Items_Courses_ItemArgs = {
  data: Create_Menu_Items_Courses_Input
}

export type MutationCreate_Menu_Items_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menu_Items_Courses_Input>>
  filter?: InputMaybe<Menu_Items_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Menu_Items_ItemArgs = {
  data: Create_Menu_Items_Input
}

export type MutationCreate_Menu_Items_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menu_Items_Input>>
  filter?: InputMaybe<Menu_Items_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Menu_Items_Pages_ItemArgs = {
  data: Create_Menu_Items_Pages_Input
}

export type MutationCreate_Menu_Items_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menu_Items_Pages_Input>>
  filter?: InputMaybe<Menu_Items_Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Menus_ItemArgs = {
  data: Create_Menus_Input
}

export type MutationCreate_Menus_ItemsArgs = {
  data?: InputMaybe<Array<Create_Menus_Input>>
  filter?: InputMaybe<Menus_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Page_Blocks_ItemArgs = {
  data: Create_Page_Blocks_Input
}

export type MutationCreate_Page_Blocks_ItemsArgs = {
  data?: InputMaybe<Array<Create_Page_Blocks_Input>>
  filter?: InputMaybe<Page_Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Pages_ItemArgs = {
  data: Create_Pages_Input
}

export type MutationCreate_Pages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Pages_Input>>
  filter?: InputMaybe<Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Posts_Category_Posts_ItemArgs = {
  data: Create_Posts_Category_Posts_Input
}

export type MutationCreate_Posts_Category_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Posts_Category_Posts_Input>>
  filter?: InputMaybe<Posts_Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Posts_ItemArgs = {
  data: Create_Posts_Input
}

export type MutationCreate_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Posts_Input>>
  filter?: InputMaybe<Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Posts_Tag_Posts_ItemArgs = {
  data: Create_Posts_Tag_Posts_Input
}

export type MutationCreate_Posts_Tag_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Posts_Tag_Posts_Input>>
  filter?: InputMaybe<Posts_Tag_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Profiles_ItemArgs = {
  data: Create_Profiles_Input
}

export type MutationCreate_Profiles_ItemsArgs = {
  data?: InputMaybe<Array<Create_Profiles_Input>>
  filter?: InputMaybe<Profiles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Questions_ItemArgs = {
  data: Create_Questions_Input
}

export type MutationCreate_Questions_ItemsArgs = {
  data?: InputMaybe<Array<Create_Questions_Input>>
  filter?: InputMaybe<Questions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Reports_ItemArgs = {
  data: Create_Reports_Input
}

export type MutationCreate_Reports_ItemsArgs = {
  data?: InputMaybe<Array<Create_Reports_Input>>
  filter?: InputMaybe<Reports_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Reports_Questions_ItemArgs = {
  data: Create_Reports_Questions_Input
}

export type MutationCreate_Reports_Questions_ItemsArgs = {
  data?: InputMaybe<Array<Create_Reports_Questions_Input>>
  filter?: InputMaybe<Reports_Questions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Scholarships_ItemArgs = {
  data: Create_Scholarships_Input
}

export type MutationCreate_Scholarships_ItemsArgs = {
  data?: InputMaybe<Array<Create_Scholarships_Input>>
  filter?: InputMaybe<Scholarships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Seo_Template_Block_ItemArgs = {
  data: Create_Seo_Template_Block_Input
}

export type MutationCreate_Seo_Template_Block_ItemsArgs = {
  data?: InputMaybe<Array<Create_Seo_Template_Block_Input>>
  filter?: InputMaybe<Seo_Template_Block_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Seo_Template_ItemArgs = {
  data: Create_Seo_Template_Input
}

export type MutationCreate_Seo_Template_ItemsArgs = {
  data?: InputMaybe<Array<Create_Seo_Template_Input>>
  filter?: InputMaybe<Seo_Template_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Settings_ItemArgs = {
  data: Create_Settings_Input
}

export type MutationCreate_Settings_ItemsArgs = {
  data?: InputMaybe<Array<Create_Settings_Input>>
  filter?: InputMaybe<Settings_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Tag_Courses_ItemArgs = {
  data: Create_Tag_Courses_Input
}

export type MutationCreate_Tag_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Tag_Courses_Input>>
  filter?: InputMaybe<Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Tag_Institutions_ItemArgs = {
  data: Create_Tag_Institutions_Input
}

export type MutationCreate_Tag_Institutions_ItemsArgs = {
  data?: InputMaybe<Array<Create_Tag_Institutions_Input>>
  filter?: InputMaybe<Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Tag_Posts_ItemArgs = {
  data: Create_Tag_Posts_Input
}

export type MutationCreate_Tag_Posts_ItemsArgs = {
  data?: InputMaybe<Array<Create_Tag_Posts_Input>>
  filter?: InputMaybe<Tag_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Test_ItemArgs = {
  data: Create_Test_Input
}

export type MutationCreate_Test_ItemsArgs = {
  data?: InputMaybe<Array<Create_Test_Input>>
  filter?: InputMaybe<Test_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_User_Setting_ItemArgs = {
  data: Create_User_Setting_Input
}

export type MutationCreate_User_Setting_ItemsArgs = {
  data?: InputMaybe<Array<Create_User_Setting_Input>>
  filter?: InputMaybe<User_Setting_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Users_ItemArgs = {
  data: Create_Users_Input
}

export type MutationCreate_Users_ItemsArgs = {
  data?: InputMaybe<Array<Create_Users_Input>>
  filter?: InputMaybe<Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationDelete_Allowed_Setting_Value_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Allowed_Setting_Value_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Bilinguals_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Bilinguals_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Blocks_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Blocks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Campuses_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Campuses_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Campuses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Campuses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Category_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Category_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Category_Posts_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Category_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Course_Languages_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Course_Languages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Category_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Category_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Tag_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Tag_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Translations_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Folders_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Folders_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Institutions_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Institutions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Institutions_Scholarships_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Institutions_Scholarships_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Institutions_Tag_Institutions_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Institutions_Tag_Institutions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Languages_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Languages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Menu_Items_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Menu_Items_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Menu_Items_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Menu_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Menu_Items_Pages_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Menu_Items_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Menus_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Menus_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Page_Blocks_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Page_Blocks_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Pages_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Pages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Posts_Category_Posts_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Posts_Category_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Posts_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Posts_Tag_Posts_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Posts_Tag_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Profiles_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Profiles_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Questions_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Questions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Reports_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Reports_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Reports_Questions_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Reports_Questions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Scholarships_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Scholarships_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Seo_Template_Block_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Seo_Template_Block_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Seo_Template_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Seo_Template_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Settings_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Settings_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Tag_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Tag_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Tag_Institutions_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Tag_Institutions_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Tag_Posts_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Tag_Posts_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Test_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Test_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_User_Setting_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_User_Setting_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Users_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Users_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationUpdate_Allowed_Setting_Value_BatchArgs = {
  data?: InputMaybe<Array<Update_Allowed_Setting_Value_Input>>
  filter?: InputMaybe<Allowed_Setting_Value_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Allowed_Setting_Value_ItemArgs = {
  data: Update_Allowed_Setting_Value_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Allowed_Setting_Value_ItemsArgs = {
  data: Update_Allowed_Setting_Value_Input
  filter?: InputMaybe<Allowed_Setting_Value_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Bilinguals_BatchArgs = {
  data?: InputMaybe<Array<Update_Bilinguals_Input>>
  filter?: InputMaybe<Bilinguals_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Bilinguals_ItemArgs = {
  data: Update_Bilinguals_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Bilinguals_ItemsArgs = {
  data: Update_Bilinguals_Input
  filter?: InputMaybe<Bilinguals_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Blocks_BatchArgs = {
  data?: InputMaybe<Array<Update_Blocks_Input>>
  filter?: InputMaybe<Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Blocks_ItemArgs = {
  data: Update_Blocks_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Blocks_ItemsArgs = {
  data: Update_Blocks_Input
  filter?: InputMaybe<Blocks_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Campuses_BatchArgs = {
  data?: InputMaybe<Array<Update_Campuses_Input>>
  filter?: InputMaybe<Campuses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Campuses_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Campuses_Courses_Input>>
  filter?: InputMaybe<Campuses_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Campuses_Courses_ItemArgs = {
  data: Update_Campuses_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Campuses_Courses_ItemsArgs = {
  data: Update_Campuses_Courses_Input
  filter?: InputMaybe<Campuses_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Campuses_ItemArgs = {
  data: Update_Campuses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Campuses_ItemsArgs = {
  data: Update_Campuses_Input
  filter?: InputMaybe<Campuses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Category_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Category_Courses_Input>>
  filter?: InputMaybe<Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Category_Courses_ItemArgs = {
  data: Update_Category_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Category_Courses_ItemsArgs = {
  data: Update_Category_Courses_Input
  filter?: InputMaybe<Category_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Category_Posts_BatchArgs = {
  data?: InputMaybe<Array<Update_Category_Posts_Input>>
  filter?: InputMaybe<Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Category_Posts_ItemArgs = {
  data: Update_Category_Posts_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Category_Posts_ItemsArgs = {
  data: Update_Category_Posts_Input
  filter?: InputMaybe<Category_Posts_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Course_Languages_BatchArgs = {
  data?: InputMaybe<Array<Update_Course_Languages_Input>>
  filter?: InputMaybe<Course_Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Course_Languages_ItemArgs = {
  data: Update_Course_Languages_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Course_Languages_ItemsArgs = {
  data: Update_Course_Languages_Input
  filter?: InputMaybe<Course_Languages_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Input>>
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Category_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Category_Courses_Input>>
  filter?: InputMaybe<Courses_Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Category_Courses_ItemArgs = {
  data: Update_Courses_Category_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Category_Courses_ItemsArgs = {
  data: Update_Courses_Category_Courses_Input
  filter?: InputMaybe<Courses_Category_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_ItemArgs = {
  data: Update_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_ItemsArgs = {
  data: Update_Courses_Input
  filter?: InputMaybe<Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Tag_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Tag_Courses_Input>>
  filter?: InputMaybe<Courses_Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Tag_Courses_ItemArgs = {
  data: Update_Courses_Tag_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Tag_Courses_ItemsArgs = {
  data: Update_Courses_Tag_Courses_Input
  filter?: InputMaybe<Courses_Tag_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Translations_Input>>
  filter?: InputMaybe<Courses_Translations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Translations_ItemArgs = {
  data: Update_Courses_Translations_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Translations_ItemsArgs = {
  data: Update_Courses_Translations_Input
  filter?: InputMaybe<Courses_Translations_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Folders_BatchArgs = {
  data?: InputMaybe<Array<Update_Folders_Input>>
  filter?: InputMaybe<Folders_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Folders_ItemArgs = {
  data: Update_Folders_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Folders_ItemsArgs = {
  data: Update_Folders_Input
  filter?: InputMaybe<Folders_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Institutions_BatchArgs = {
  data?: InputMaybe<Array<Update_Institutions_Input>>
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Institutions_ItemArgs = {
  data: Update_Institutions_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Institutions_ItemsArgs = {
  data: Update_Institutions_Input
  filter?: InputMaybe<Institutions_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Institutions_Scholarships_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Institutions_Scholarships_Courses_Input>>
  filter?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Institutions_Scholarships_Courses_ItemArgs = {
  data: Update_Institutions_Scholarships_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Institutions_Scholarships_Courses_ItemsArgs = {
  data: Update_Institutions_Scholarships_Courses_Input
  filter?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Institutions_Tag_Institutions_BatchArgs = {
  data?: InputMaybe<Array<Update_Institutions_Tag_Institutions_Input>>
  filter?: InputMaybe<Institutions_Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Institutions_Tag_Institutions_ItemArgs = {
  data: Update_Institutions_Tag_Institutions_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Institutions_Tag_Institutions_ItemsArgs = {
  data: Update_Institutions_Tag_Institutions_Input
  filter?: InputMaybe<Institutions_Tag_Institutions_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Languages_BatchArgs = {
  data?: InputMaybe<Array<Update_Languages_Input>>
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Languages_ItemArgs = {
  data: Update_Languages_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Languages_ItemsArgs = {
  data: Update_Languages_Input
  filter?: InputMaybe<Languages_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menu_Items_BatchArgs = {
  data?: InputMaybe<Array<Update_Menu_Items_Input>>
  filter?: InputMaybe<Menu_Items_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menu_Items_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Menu_Items_Courses_Input>>
  filter?: InputMaybe<Menu_Items_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menu_Items_Courses_ItemArgs = {
  data: Update_Menu_Items_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Menu_Items_Courses_ItemsArgs = {
  data: Update_Menu_Items_Courses_Input
  filter?: InputMaybe<Menu_Items_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menu_Items_ItemArgs = {
  data: Update_Menu_Items_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Menu_Items_ItemsArgs = {
  data: Update_Menu_Items_Input
  filter?: InputMaybe<Menu_Items_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menu_Items_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Menu_Items_Pages_Input>>
  filter?: InputMaybe<Menu_Items_Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menu_Items_Pages_ItemArgs = {
  data: Update_Menu_Items_Pages_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Menu_Items_Pages_ItemsArgs = {
  data: Update_Menu_Items_Pages_Input
  filter?: InputMaybe<Menu_Items_Pages_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menus_BatchArgs = {
  data?: InputMaybe<Array<Update_Menus_Input>>
  filter?: InputMaybe<Menus_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Menus_ItemArgs = {
  data: Update_Menus_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Menus_ItemsArgs = {
  data: Update_Menus_Input
  filter?: InputMaybe<Menus_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Page_Blocks_BatchArgs = {
  data?: InputMaybe<Array<Update_Page_Blocks_Input>>
  filter?: InputMaybe<Page_Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Page_Blocks_ItemArgs = {
  data: Update_Page_Blocks_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Page_Blocks_ItemsArgs = {
  data: Update_Page_Blocks_Input
  filter?: InputMaybe<Page_Blocks_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Pages_BatchArgs = {
  data?: InputMaybe<Array<Update_Pages_Input>>
  filter?: InputMaybe<Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Pages_ItemArgs = {
  data: Update_Pages_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Pages_ItemsArgs = {
  data: Update_Pages_Input
  filter?: InputMaybe<Pages_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Posts_BatchArgs = {
  data?: InputMaybe<Array<Update_Posts_Input>>
  filter?: InputMaybe<Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Posts_Category_Posts_BatchArgs = {
  data?: InputMaybe<Array<Update_Posts_Category_Posts_Input>>
  filter?: InputMaybe<Posts_Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Posts_Category_Posts_ItemArgs = {
  data: Update_Posts_Category_Posts_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Posts_Category_Posts_ItemsArgs = {
  data: Update_Posts_Category_Posts_Input
  filter?: InputMaybe<Posts_Category_Posts_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Posts_ItemArgs = {
  data: Update_Posts_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Posts_ItemsArgs = {
  data: Update_Posts_Input
  filter?: InputMaybe<Posts_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Posts_Tag_Posts_BatchArgs = {
  data?: InputMaybe<Array<Update_Posts_Tag_Posts_Input>>
  filter?: InputMaybe<Posts_Tag_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Posts_Tag_Posts_ItemArgs = {
  data: Update_Posts_Tag_Posts_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Posts_Tag_Posts_ItemsArgs = {
  data: Update_Posts_Tag_Posts_Input
  filter?: InputMaybe<Posts_Tag_Posts_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Profiles_BatchArgs = {
  data?: InputMaybe<Array<Update_Profiles_Input>>
  filter?: InputMaybe<Profiles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Profiles_ItemArgs = {
  data: Update_Profiles_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Profiles_ItemsArgs = {
  data: Update_Profiles_Input
  filter?: InputMaybe<Profiles_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Questions_BatchArgs = {
  data?: InputMaybe<Array<Update_Questions_Input>>
  filter?: InputMaybe<Questions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Questions_ItemArgs = {
  data: Update_Questions_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Questions_ItemsArgs = {
  data: Update_Questions_Input
  filter?: InputMaybe<Questions_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Reports_BatchArgs = {
  data?: InputMaybe<Array<Update_Reports_Input>>
  filter?: InputMaybe<Reports_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Reports_ItemArgs = {
  data: Update_Reports_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Reports_ItemsArgs = {
  data: Update_Reports_Input
  filter?: InputMaybe<Reports_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Reports_Questions_BatchArgs = {
  data?: InputMaybe<Array<Update_Reports_Questions_Input>>
  filter?: InputMaybe<Reports_Questions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Reports_Questions_ItemArgs = {
  data: Update_Reports_Questions_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Reports_Questions_ItemsArgs = {
  data: Update_Reports_Questions_Input
  filter?: InputMaybe<Reports_Questions_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Scholarships_BatchArgs = {
  data?: InputMaybe<Array<Update_Scholarships_Input>>
  filter?: InputMaybe<Scholarships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Scholarships_ItemArgs = {
  data: Update_Scholarships_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Scholarships_ItemsArgs = {
  data: Update_Scholarships_Input
  filter?: InputMaybe<Scholarships_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Seo_Template_BatchArgs = {
  data?: InputMaybe<Array<Update_Seo_Template_Input>>
  filter?: InputMaybe<Seo_Template_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Seo_Template_Block_BatchArgs = {
  data?: InputMaybe<Array<Update_Seo_Template_Block_Input>>
  filter?: InputMaybe<Seo_Template_Block_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Seo_Template_Block_ItemArgs = {
  data: Update_Seo_Template_Block_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Seo_Template_Block_ItemsArgs = {
  data: Update_Seo_Template_Block_Input
  filter?: InputMaybe<Seo_Template_Block_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Seo_Template_ItemArgs = {
  data: Update_Seo_Template_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Seo_Template_ItemsArgs = {
  data: Update_Seo_Template_Input
  filter?: InputMaybe<Seo_Template_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Settings_BatchArgs = {
  data?: InputMaybe<Array<Update_Settings_Input>>
  filter?: InputMaybe<Settings_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Settings_ItemArgs = {
  data: Update_Settings_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Settings_ItemsArgs = {
  data: Update_Settings_Input
  filter?: InputMaybe<Settings_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Tag_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Tag_Courses_Input>>
  filter?: InputMaybe<Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Tag_Courses_ItemArgs = {
  data: Update_Tag_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Tag_Courses_ItemsArgs = {
  data: Update_Tag_Courses_Input
  filter?: InputMaybe<Tag_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Tag_Institutions_BatchArgs = {
  data?: InputMaybe<Array<Update_Tag_Institutions_Input>>
  filter?: InputMaybe<Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Tag_Institutions_ItemArgs = {
  data: Update_Tag_Institutions_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Tag_Institutions_ItemsArgs = {
  data: Update_Tag_Institutions_Input
  filter?: InputMaybe<Tag_Institutions_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Tag_Posts_BatchArgs = {
  data?: InputMaybe<Array<Update_Tag_Posts_Input>>
  filter?: InputMaybe<Tag_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Tag_Posts_ItemArgs = {
  data: Update_Tag_Posts_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Tag_Posts_ItemsArgs = {
  data: Update_Tag_Posts_Input
  filter?: InputMaybe<Tag_Posts_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Test_BatchArgs = {
  data?: InputMaybe<Array<Update_Test_Input>>
  filter?: InputMaybe<Test_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Test_ItemArgs = {
  data: Update_Test_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Test_ItemsArgs = {
  data: Update_Test_Input
  filter?: InputMaybe<Test_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_User_Setting_BatchArgs = {
  data?: InputMaybe<Array<Update_User_Setting_Input>>
  filter?: InputMaybe<User_Setting_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_User_Setting_ItemArgs = {
  data: Update_User_Setting_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_User_Setting_ItemsArgs = {
  data: Update_User_Setting_Input
  filter?: InputMaybe<User_Setting_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Users_BatchArgs = {
  data?: InputMaybe<Array<Update_Users_Input>>
  filter?: InputMaybe<Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Users_ItemArgs = {
  data: Update_Users_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Users_ItemsArgs = {
  data: Update_Users_Input
  filter?: InputMaybe<Users_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Query = {
  __typename?: 'Query'
  allowed_setting_value: Array<Allowed_Setting_Value>
  allowed_setting_value_aggregated: Array<Allowed_Setting_Value_Aggregated>
  allowed_setting_value_by_id?: Maybe<Allowed_Setting_Value>
  allowed_setting_value_by_version?: Maybe<Version_Allowed_Setting_Value>
  bilinguals: Array<Bilinguals>
  bilinguals_aggregated: Array<Bilinguals_Aggregated>
  bilinguals_by_id?: Maybe<Bilinguals>
  bilinguals_by_version?: Maybe<Version_Bilinguals>
  blocks: Array<Blocks>
  blocks_aggregated: Array<Blocks_Aggregated>
  blocks_by_id?: Maybe<Blocks>
  blocks_by_version?: Maybe<Version_Blocks>
  campuses: Array<Campuses>
  campuses_aggregated: Array<Campuses_Aggregated>
  campuses_by_id?: Maybe<Campuses>
  campuses_by_version?: Maybe<Version_Campuses>
  campuses_courses: Array<Campuses_Courses>
  campuses_courses_aggregated: Array<Campuses_Courses_Aggregated>
  campuses_courses_by_id?: Maybe<Campuses_Courses>
  campuses_courses_by_version?: Maybe<Version_Campuses_Courses>
  category_courses: Array<Category_Courses>
  category_courses_aggregated: Array<Category_Courses_Aggregated>
  category_courses_by_id?: Maybe<Category_Courses>
  category_courses_by_version?: Maybe<Version_Category_Courses>
  category_posts: Array<Category_Posts>
  category_posts_aggregated: Array<Category_Posts_Aggregated>
  category_posts_by_id?: Maybe<Category_Posts>
  category_posts_by_version?: Maybe<Version_Category_Posts>
  course_languages: Array<Course_Languages>
  course_languages_aggregated: Array<Course_Languages_Aggregated>
  course_languages_by_id?: Maybe<Course_Languages>
  course_languages_by_version?: Maybe<Version_Course_Languages>
  courses: Array<Courses>
  courses_aggregated: Array<Courses_Aggregated>
  courses_by_id?: Maybe<Courses>
  courses_by_version?: Maybe<Version_Courses>
  courses_category_courses: Array<Courses_Category_Courses>
  courses_category_courses_aggregated: Array<Courses_Category_Courses_Aggregated>
  courses_category_courses_by_id?: Maybe<Courses_Category_Courses>
  courses_category_courses_by_version?: Maybe<Version_Courses_Category_Courses>
  courses_tag_courses: Array<Courses_Tag_Courses>
  courses_tag_courses_aggregated: Array<Courses_Tag_Courses_Aggregated>
  courses_tag_courses_by_id?: Maybe<Courses_Tag_Courses>
  courses_tag_courses_by_version?: Maybe<Version_Courses_Tag_Courses>
  courses_translations: Array<Courses_Translations>
  courses_translations_aggregated: Array<Courses_Translations_Aggregated>
  courses_translations_by_id?: Maybe<Courses_Translations>
  courses_translations_by_version?: Maybe<Version_Courses_Translations>
  folders: Array<Folders>
  folders_aggregated: Array<Folders_Aggregated>
  folders_by_id?: Maybe<Folders>
  folders_by_version?: Maybe<Version_Folders>
  institutions: Array<Institutions>
  institutions_aggregated: Array<Institutions_Aggregated>
  institutions_by_id?: Maybe<Institutions>
  institutions_by_version?: Maybe<Version_Institutions>
  institutions_scholarships_courses: Array<Institutions_Scholarships_Courses>
  institutions_scholarships_courses_aggregated: Array<Institutions_Scholarships_Courses_Aggregated>
  institutions_scholarships_courses_by_id?: Maybe<Institutions_Scholarships_Courses>
  institutions_scholarships_courses_by_version?: Maybe<Version_Institutions_Scholarships_Courses>
  institutions_tag_institutions: Array<Institutions_Tag_Institutions>
  institutions_tag_institutions_aggregated: Array<Institutions_Tag_Institutions_Aggregated>
  institutions_tag_institutions_by_id?: Maybe<Institutions_Tag_Institutions>
  institutions_tag_institutions_by_version?: Maybe<Version_Institutions_Tag_Institutions>
  languages: Array<Languages>
  languages_aggregated: Array<Languages_Aggregated>
  languages_by_id?: Maybe<Languages>
  languages_by_version?: Maybe<Version_Languages>
  menu_items: Array<Menu_Items>
  menu_items_aggregated: Array<Menu_Items_Aggregated>
  menu_items_by_id?: Maybe<Menu_Items>
  menu_items_by_version?: Maybe<Version_Menu_Items>
  menu_items_courses: Array<Menu_Items_Courses>
  menu_items_courses_aggregated: Array<Menu_Items_Courses_Aggregated>
  menu_items_courses_by_id?: Maybe<Menu_Items_Courses>
  menu_items_courses_by_version?: Maybe<Version_Menu_Items_Courses>
  menu_items_pages: Array<Menu_Items_Pages>
  menu_items_pages_aggregated: Array<Menu_Items_Pages_Aggregated>
  menu_items_pages_by_id?: Maybe<Menu_Items_Pages>
  menu_items_pages_by_version?: Maybe<Version_Menu_Items_Pages>
  menus: Array<Menus>
  menus_aggregated: Array<Menus_Aggregated>
  menus_by_id?: Maybe<Menus>
  menus_by_version?: Maybe<Version_Menus>
  page_blocks: Array<Page_Blocks>
  page_blocks_aggregated: Array<Page_Blocks_Aggregated>
  page_blocks_by_id?: Maybe<Page_Blocks>
  page_blocks_by_version?: Maybe<Version_Page_Blocks>
  pages: Array<Pages>
  pages_aggregated: Array<Pages_Aggregated>
  pages_by_id?: Maybe<Pages>
  pages_by_version?: Maybe<Version_Pages>
  posts: Array<Posts>
  posts_aggregated: Array<Posts_Aggregated>
  posts_by_id?: Maybe<Posts>
  posts_by_version?: Maybe<Version_Posts>
  posts_category_posts: Array<Posts_Category_Posts>
  posts_category_posts_aggregated: Array<Posts_Category_Posts_Aggregated>
  posts_category_posts_by_id?: Maybe<Posts_Category_Posts>
  posts_category_posts_by_version?: Maybe<Version_Posts_Category_Posts>
  posts_tag_posts: Array<Posts_Tag_Posts>
  posts_tag_posts_aggregated: Array<Posts_Tag_Posts_Aggregated>
  posts_tag_posts_by_id?: Maybe<Posts_Tag_Posts>
  posts_tag_posts_by_version?: Maybe<Version_Posts_Tag_Posts>
  profiles: Array<Profiles>
  profiles_aggregated: Array<Profiles_Aggregated>
  profiles_by_id?: Maybe<Profiles>
  profiles_by_version?: Maybe<Version_Profiles>
  questions: Array<Questions>
  questions_aggregated: Array<Questions_Aggregated>
  questions_by_id?: Maybe<Questions>
  questions_by_version?: Maybe<Version_Questions>
  reports: Array<Reports>
  reports_aggregated: Array<Reports_Aggregated>
  reports_by_id?: Maybe<Reports>
  reports_by_version?: Maybe<Version_Reports>
  reports_questions: Array<Reports_Questions>
  reports_questions_aggregated: Array<Reports_Questions_Aggregated>
  reports_questions_by_id?: Maybe<Reports_Questions>
  reports_questions_by_version?: Maybe<Version_Reports_Questions>
  scholarships: Array<Scholarships>
  scholarships_aggregated: Array<Scholarships_Aggregated>
  scholarships_by_id?: Maybe<Scholarships>
  scholarships_by_version?: Maybe<Version_Scholarships>
  seo_template: Array<Seo_Template>
  seo_template_aggregated: Array<Seo_Template_Aggregated>
  seo_template_block: Array<Seo_Template_Block>
  seo_template_block_aggregated: Array<Seo_Template_Block_Aggregated>
  seo_template_block_by_id?: Maybe<Seo_Template_Block>
  seo_template_block_by_version?: Maybe<Version_Seo_Template_Block>
  seo_template_by_id?: Maybe<Seo_Template>
  seo_template_by_version?: Maybe<Version_Seo_Template>
  settings: Array<Settings>
  settings_aggregated: Array<Settings_Aggregated>
  settings_by_id?: Maybe<Settings>
  settings_by_version?: Maybe<Version_Settings>
  tag_courses: Array<Tag_Courses>
  tag_courses_aggregated: Array<Tag_Courses_Aggregated>
  tag_courses_by_id?: Maybe<Tag_Courses>
  tag_courses_by_version?: Maybe<Version_Tag_Courses>
  tag_institutions: Array<Tag_Institutions>
  tag_institutions_aggregated: Array<Tag_Institutions_Aggregated>
  tag_institutions_by_id?: Maybe<Tag_Institutions>
  tag_institutions_by_version?: Maybe<Version_Tag_Institutions>
  tag_posts: Array<Tag_Posts>
  tag_posts_aggregated: Array<Tag_Posts_Aggregated>
  tag_posts_by_id?: Maybe<Tag_Posts>
  tag_posts_by_version?: Maybe<Version_Tag_Posts>
  test: Array<Test>
  test_aggregated: Array<Test_Aggregated>
  test_by_id?: Maybe<Test>
  test_by_version?: Maybe<Version_Test>
  user_setting: Array<User_Setting>
  user_setting_aggregated: Array<User_Setting_Aggregated>
  user_setting_by_id?: Maybe<User_Setting>
  user_setting_by_version?: Maybe<Version_User_Setting>
  users: Array<Users>
  users_aggregated: Array<Users_Aggregated>
  users_by_id?: Maybe<Users>
  users_by_version?: Maybe<Version_Users>
}

export type QueryAllowed_Setting_ValueArgs = {
  filter?: InputMaybe<Allowed_Setting_Value_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryAllowed_Setting_Value_AggregatedArgs = {
  filter?: InputMaybe<Allowed_Setting_Value_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryAllowed_Setting_Value_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryAllowed_Setting_Value_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryBilingualsArgs = {
  filter?: InputMaybe<Bilinguals_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryBilinguals_AggregatedArgs = {
  filter?: InputMaybe<Bilinguals_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryBilinguals_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryBilinguals_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryBlocksArgs = {
  filter?: InputMaybe<Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryBlocks_AggregatedArgs = {
  filter?: InputMaybe<Blocks_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryBlocks_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryBlocks_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCampusesArgs = {
  filter?: InputMaybe<Campuses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCampuses_AggregatedArgs = {
  filter?: InputMaybe<Campuses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCampuses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCampuses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCampuses_CoursesArgs = {
  filter?: InputMaybe<Campuses_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCampuses_Courses_AggregatedArgs = {
  filter?: InputMaybe<Campuses_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCampuses_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCampuses_Courses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCategory_CoursesArgs = {
  filter?: InputMaybe<Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategory_Courses_AggregatedArgs = {
  filter?: InputMaybe<Category_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategory_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCategory_Courses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCategory_PostsArgs = {
  filter?: InputMaybe<Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategory_Posts_AggregatedArgs = {
  filter?: InputMaybe<Category_Posts_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategory_Posts_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCategory_Posts_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourse_LanguagesArgs = {
  filter?: InputMaybe<Course_Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourse_Languages_AggregatedArgs = {
  filter?: InputMaybe<Course_Languages_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourse_Languages_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourse_Languages_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCoursesArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_AggregatedArgs = {
  filter?: InputMaybe<Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_Category_CoursesArgs = {
  filter?: InputMaybe<Courses_Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Category_Courses_AggregatedArgs = {
  filter?: InputMaybe<Courses_Category_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Category_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Category_Courses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_Tag_CoursesArgs = {
  filter?: InputMaybe<Courses_Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Tag_Courses_AggregatedArgs = {
  filter?: InputMaybe<Courses_Tag_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Tag_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Tag_Courses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_TranslationsArgs = {
  filter?: InputMaybe<Courses_Translations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Translations_AggregatedArgs = {
  filter?: InputMaybe<Courses_Translations_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Translations_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Translations_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryFoldersArgs = {
  filter?: InputMaybe<Folders_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryFolders_AggregatedArgs = {
  filter?: InputMaybe<Folders_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryFolders_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryFolders_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryInstitutionsArgs = {
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_AggregatedArgs = {
  filter?: InputMaybe<Institutions_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryInstitutions_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryInstitutions_Scholarships_CoursesArgs = {
  filter?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_Scholarships_Courses_AggregatedArgs = {
  filter?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_Scholarships_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryInstitutions_Scholarships_Courses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryInstitutions_Tag_InstitutionsArgs = {
  filter?: InputMaybe<Institutions_Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_Tag_Institutions_AggregatedArgs = {
  filter?: InputMaybe<Institutions_Tag_Institutions_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_Tag_Institutions_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryInstitutions_Tag_Institutions_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryLanguages_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryMenu_ItemsArgs = {
  filter?: InputMaybe<Menu_Items_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenu_Items_AggregatedArgs = {
  filter?: InputMaybe<Menu_Items_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenu_Items_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryMenu_Items_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryMenu_Items_CoursesArgs = {
  filter?: InputMaybe<Menu_Items_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenu_Items_Courses_AggregatedArgs = {
  filter?: InputMaybe<Menu_Items_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenu_Items_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryMenu_Items_Courses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryMenu_Items_PagesArgs = {
  filter?: InputMaybe<Menu_Items_Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenu_Items_Pages_AggregatedArgs = {
  filter?: InputMaybe<Menu_Items_Pages_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenu_Items_Pages_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryMenu_Items_Pages_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryMenusArgs = {
  filter?: InputMaybe<Menus_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenus_AggregatedArgs = {
  filter?: InputMaybe<Menus_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMenus_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryMenus_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryPage_BlocksArgs = {
  filter?: InputMaybe<Page_Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPage_Blocks_AggregatedArgs = {
  filter?: InputMaybe<Page_Blocks_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPage_Blocks_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryPage_Blocks_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryPagesArgs = {
  filter?: InputMaybe<Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPages_AggregatedArgs = {
  filter?: InputMaybe<Pages_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPages_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryPages_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryPostsArgs = {
  filter?: InputMaybe<Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPosts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPosts_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryPosts_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryPosts_Category_PostsArgs = {
  filter?: InputMaybe<Posts_Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPosts_Category_Posts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Category_Posts_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPosts_Category_Posts_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryPosts_Category_Posts_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryPosts_Tag_PostsArgs = {
  filter?: InputMaybe<Posts_Tag_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPosts_Tag_Posts_AggregatedArgs = {
  filter?: InputMaybe<Posts_Tag_Posts_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryPosts_Tag_Posts_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryPosts_Tag_Posts_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryProfilesArgs = {
  filter?: InputMaybe<Profiles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryProfiles_AggregatedArgs = {
  filter?: InputMaybe<Profiles_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryProfiles_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryProfiles_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryQuestionsArgs = {
  filter?: InputMaybe<Questions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryQuestions_AggregatedArgs = {
  filter?: InputMaybe<Questions_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryQuestions_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryQuestions_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryReportsArgs = {
  filter?: InputMaybe<Reports_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryReports_AggregatedArgs = {
  filter?: InputMaybe<Reports_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryReports_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryReports_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryReports_QuestionsArgs = {
  filter?: InputMaybe<Reports_Questions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryReports_Questions_AggregatedArgs = {
  filter?: InputMaybe<Reports_Questions_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryReports_Questions_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryReports_Questions_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryScholarshipsArgs = {
  filter?: InputMaybe<Scholarships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryScholarships_AggregatedArgs = {
  filter?: InputMaybe<Scholarships_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryScholarships_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryScholarships_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QuerySeo_TemplateArgs = {
  filter?: InputMaybe<Seo_Template_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySeo_Template_AggregatedArgs = {
  filter?: InputMaybe<Seo_Template_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySeo_Template_BlockArgs = {
  filter?: InputMaybe<Seo_Template_Block_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySeo_Template_Block_AggregatedArgs = {
  filter?: InputMaybe<Seo_Template_Block_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySeo_Template_Block_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QuerySeo_Template_Block_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QuerySeo_Template_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QuerySeo_Template_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QuerySettingsArgs = {
  filter?: InputMaybe<Settings_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySettings_AggregatedArgs = {
  filter?: InputMaybe<Settings_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QuerySettings_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QuerySettings_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTag_CoursesArgs = {
  filter?: InputMaybe<Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTag_Courses_AggregatedArgs = {
  filter?: InputMaybe<Tag_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTag_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTag_Courses_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTag_InstitutionsArgs = {
  filter?: InputMaybe<Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTag_Institutions_AggregatedArgs = {
  filter?: InputMaybe<Tag_Institutions_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTag_Institutions_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTag_Institutions_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTag_PostsArgs = {
  filter?: InputMaybe<Tag_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTag_Posts_AggregatedArgs = {
  filter?: InputMaybe<Tag_Posts_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTag_Posts_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTag_Posts_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTestArgs = {
  filter?: InputMaybe<Test_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTest_AggregatedArgs = {
  filter?: InputMaybe<Test_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTest_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTest_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryUser_SettingArgs = {
  filter?: InputMaybe<User_Setting_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUser_Setting_AggregatedArgs = {
  filter?: InputMaybe<User_Setting_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUser_Setting_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryUser_Setting_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryUsersArgs = {
  filter?: InputMaybe<Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsers_AggregatedArgs = {
  filter?: InputMaybe<Users_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryUsers_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryUsers_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type Subscription = {
  __typename?: 'Subscription'
  allowed_setting_value_mutated?: Maybe<Allowed_Setting_Value_Mutated>
  bilinguals_mutated?: Maybe<Bilinguals_Mutated>
  blocks_mutated?: Maybe<Blocks_Mutated>
  campuses_courses_mutated?: Maybe<Campuses_Courses_Mutated>
  campuses_mutated?: Maybe<Campuses_Mutated>
  category_courses_mutated?: Maybe<Category_Courses_Mutated>
  category_posts_mutated?: Maybe<Category_Posts_Mutated>
  course_languages_mutated?: Maybe<Course_Languages_Mutated>
  courses_category_courses_mutated?: Maybe<Courses_Category_Courses_Mutated>
  courses_mutated?: Maybe<Courses_Mutated>
  courses_tag_courses_mutated?: Maybe<Courses_Tag_Courses_Mutated>
  courses_translations_mutated?: Maybe<Courses_Translations_Mutated>
  directus_access_mutated?: Maybe<Directus_Access_Mutated>
  directus_activity_mutated?: Maybe<Directus_Activity_Mutated>
  directus_comments_mutated?: Maybe<Directus_Comments_Mutated>
  directus_dashboards_mutated?: Maybe<Directus_Dashboards_Mutated>
  directus_files_mutated?: Maybe<Directus_Files_Mutated>
  directus_flows_mutated?: Maybe<Directus_Flows_Mutated>
  directus_folders_mutated?: Maybe<Directus_Folders_Mutated>
  directus_notifications_mutated?: Maybe<Directus_Notifications_Mutated>
  directus_operations_mutated?: Maybe<Directus_Operations_Mutated>
  directus_panels_mutated?: Maybe<Directus_Panels_Mutated>
  directus_permissions_mutated?: Maybe<Directus_Permissions_Mutated>
  directus_policies_mutated?: Maybe<Directus_Policies_Mutated>
  directus_presets_mutated?: Maybe<Directus_Presets_Mutated>
  directus_revisions_mutated?: Maybe<Directus_Revisions_Mutated>
  directus_roles_mutated?: Maybe<Directus_Roles_Mutated>
  directus_settings_mutated?: Maybe<Directus_Settings_Mutated>
  directus_shares_mutated?: Maybe<Directus_Shares_Mutated>
  directus_translations_mutated?: Maybe<Directus_Translations_Mutated>
  directus_users_mutated?: Maybe<Directus_Users_Mutated>
  directus_versions_mutated?: Maybe<Directus_Versions_Mutated>
  directus_webhooks_mutated?: Maybe<Directus_Webhooks_Mutated>
  folders_mutated?: Maybe<Folders_Mutated>
  institutions_mutated?: Maybe<Institutions_Mutated>
  institutions_scholarships_courses_mutated?: Maybe<Institutions_Scholarships_Courses_Mutated>
  institutions_tag_institutions_mutated?: Maybe<Institutions_Tag_Institutions_Mutated>
  languages_mutated?: Maybe<Languages_Mutated>
  menu_items_courses_mutated?: Maybe<Menu_Items_Courses_Mutated>
  menu_items_mutated?: Maybe<Menu_Items_Mutated>
  menu_items_pages_mutated?: Maybe<Menu_Items_Pages_Mutated>
  menus_mutated?: Maybe<Menus_Mutated>
  page_blocks_mutated?: Maybe<Page_Blocks_Mutated>
  pages_mutated?: Maybe<Pages_Mutated>
  posts_category_posts_mutated?: Maybe<Posts_Category_Posts_Mutated>
  posts_mutated?: Maybe<Posts_Mutated>
  posts_tag_posts_mutated?: Maybe<Posts_Tag_Posts_Mutated>
  profiles_mutated?: Maybe<Profiles_Mutated>
  questions_mutated?: Maybe<Questions_Mutated>
  reports_mutated?: Maybe<Reports_Mutated>
  reports_questions_mutated?: Maybe<Reports_Questions_Mutated>
  scholarships_mutated?: Maybe<Scholarships_Mutated>
  seo_template_block_mutated?: Maybe<Seo_Template_Block_Mutated>
  seo_template_mutated?: Maybe<Seo_Template_Mutated>
  settings_mutated?: Maybe<Settings_Mutated>
  tag_courses_mutated?: Maybe<Tag_Courses_Mutated>
  tag_institutions_mutated?: Maybe<Tag_Institutions_Mutated>
  tag_posts_mutated?: Maybe<Tag_Posts_Mutated>
  test_mutated?: Maybe<Test_Mutated>
  user_setting_mutated?: Maybe<User_Setting_Mutated>
  users_mutated?: Maybe<Users_Mutated>
}

export type SubscriptionAllowed_Setting_Value_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionBilinguals_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionBlocks_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCampuses_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCampuses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCategory_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCategory_Posts_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourse_Languages_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Category_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Tag_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Access_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Activity_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Comments_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Dashboards_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Operations_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Panels_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Permissions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Policies_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Presets_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Revisions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Versions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDirectus_Webhooks_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionFolders_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionInstitutions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionInstitutions_Scholarships_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionInstitutions_Tag_Institutions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMenu_Items_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMenu_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMenu_Items_Pages_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMenus_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionPage_Blocks_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionPages_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionPosts_Category_Posts_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionPosts_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionPosts_Tag_Posts_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionProfiles_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionQuestions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionReports_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionReports_Questions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionScholarships_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionSeo_Template_Block_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionSeo_Template_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionSettings_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTag_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTag_Institutions_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTag_Posts_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTest_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionUser_Setting_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionUsers_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type Allowed_Setting_Value = {
  __typename?: 'allowed_setting_value'
  caption?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  item_value?: Maybe<Scalars['String']['output']>
  settings_id?: Maybe<Settings>
}

export type Allowed_Setting_ValueSettings_IdArgs = {
  filter?: InputMaybe<Settings_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Allowed_Setting_Value_Aggregated = {
  __typename?: 'allowed_setting_value_aggregated'
  count?: Maybe<Allowed_Setting_Value_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Allowed_Setting_Value_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Allowed_Setting_Value_Aggregated_Count = {
  __typename?: 'allowed_setting_value_aggregated_count'
  caption?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  item_value?: Maybe<Scalars['Int']['output']>
  settings_id?: Maybe<Scalars['Int']['output']>
}

export type Allowed_Setting_Value_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Allowed_Setting_Value_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Allowed_Setting_Value_Filter>>>
  caption?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  item_value?: InputMaybe<String_Filter_Operators>
  settings_id?: InputMaybe<Settings_Filter>
}

export type Allowed_Setting_Value_Mutated = {
  __typename?: 'allowed_setting_value_mutated'
  data?: Maybe<Allowed_Setting_Value>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>
  _nnull?: InputMaybe<Scalars['Boolean']['input']>
  _null?: InputMaybe<Scalars['Boolean']['input']>
}

export type Bilinguals = {
  __typename?: 'bilinguals'
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type Bilinguals_Aggregated = {
  __typename?: 'bilinguals_aggregated'
  count?: Maybe<Bilinguals_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Bilinguals_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Bilinguals_Aggregated_Count = {
  __typename?: 'bilinguals_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Bilinguals_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Bilinguals_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Bilinguals_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Bilinguals_Mutated = {
  __typename?: 'bilinguals_mutated'
  data?: Maybe<Bilinguals>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Blocks = {
  __typename?: 'blocks'
  blocks_id?: Maybe<Blocks>
  id: Scalars['ID']['output']
  schema?: Maybe<Scalars['JSON']['output']>
  schema_func?: Maybe<Count_Functions>
}

export type BlocksBlocks_IdArgs = {
  filter?: InputMaybe<Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Blocks_Aggregated = {
  __typename?: 'blocks_aggregated'
  count?: Maybe<Blocks_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Blocks_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Blocks_Aggregated_Count = {
  __typename?: 'blocks_aggregated_count'
  blocks_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  schema?: Maybe<Scalars['Int']['output']>
}

export type Blocks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Blocks_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Blocks_Filter>>>
  blocks_id?: InputMaybe<Blocks_Filter>
  id?: InputMaybe<String_Filter_Operators>
  schema?: InputMaybe<String_Filter_Operators>
  schema_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Blocks_Mutated = {
  __typename?: 'blocks_mutated'
  data?: Maybe<Blocks>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>
  _neq?: InputMaybe<Scalars['Boolean']['input']>
  _nnull?: InputMaybe<Scalars['Boolean']['input']>
  _null?: InputMaybe<Scalars['Boolean']['input']>
}

export type Campuses = {
  __typename?: 'campuses'
  city?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<Scalars['String']['output']>
  institutions_id?: Maybe<Institutions>
  intro?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  phone?: Maybe<Scalars['String']['output']>
  postal_code?: Maybe<Scalars['String']['output']>
  street_address?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type CampusesInstitutions_IdArgs = {
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Campuses_Aggregated = {
  __typename?: 'campuses_aggregated'
  count?: Maybe<Campuses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Campuses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Campuses_Aggregated_Count = {
  __typename?: 'campuses_aggregated_count'
  city?: Maybe<Scalars['Int']['output']>
  country?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  images?: Maybe<Scalars['Int']['output']>
  institutions_id?: Maybe<Scalars['Int']['output']>
  intro?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  phone?: Maybe<Scalars['Int']['output']>
  postal_code?: Maybe<Scalars['Int']['output']>
  street_address?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
}

export type Campuses_Courses = {
  __typename?: 'campuses_courses'
  campuses_id?: Maybe<Campuses>
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
}

export type Campuses_CoursesCampuses_IdArgs = {
  filter?: InputMaybe<Campuses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Campuses_CoursesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Campuses_Courses_Aggregated = {
  __typename?: 'campuses_courses_aggregated'
  count?: Maybe<Campuses_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Campuses_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Campuses_Courses_Aggregated_Count = {
  __typename?: 'campuses_courses_aggregated_count'
  campuses_id?: Maybe<Scalars['Int']['output']>
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Campuses_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Campuses_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Campuses_Courses_Filter>>>
  campuses_id?: InputMaybe<Campuses_Filter>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<String_Filter_Operators>
}

export type Campuses_Courses_Mutated = {
  __typename?: 'campuses_courses_mutated'
  data?: Maybe<Campuses_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Campuses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Campuses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Campuses_Filter>>>
  city?: InputMaybe<String_Filter_Operators>
  country?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  images?: InputMaybe<String_Filter_Operators>
  institutions_id?: InputMaybe<Institutions_Filter>
  intro?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  phone?: InputMaybe<String_Filter_Operators>
  postal_code?: InputMaybe<String_Filter_Operators>
  street_address?: InputMaybe<String_Filter_Operators>
  type?: InputMaybe<String_Filter_Operators>
}

export type Campuses_Mutated = {
  __typename?: 'campuses_mutated'
  data?: Maybe<Campuses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Category_Courses = {
  __typename?: 'category_courses'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  seo_template_id?: Maybe<Seo_Template>
  tag_courses_id?: Maybe<Tag_Courses>
}

export type Category_CoursesSeo_Template_IdArgs = {
  filter?: InputMaybe<Seo_Template_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_CoursesTag_Courses_IdArgs = {
  filter?: InputMaybe<Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_Courses_Aggregated = {
  __typename?: 'category_courses_aggregated'
  count?: Maybe<Category_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Category_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Category_Courses_Aggregated_Count = {
  __typename?: 'category_courses_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  seo_template_id?: Maybe<Scalars['Int']['output']>
  tag_courses_id?: Maybe<Scalars['Int']['output']>
}

export type Category_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Category_Courses_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  seo_template_id?: InputMaybe<Seo_Template_Filter>
  tag_courses_id?: InputMaybe<Tag_Courses_Filter>
}

export type Category_Courses_Mutated = {
  __typename?: 'category_courses_mutated'
  data?: Maybe<Category_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Category_Posts = {
  __typename?: 'category_posts'
  category_posts_id?: Maybe<Category_Posts>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type Category_PostsCategory_Posts_IdArgs = {
  filter?: InputMaybe<Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_Posts_Aggregated = {
  __typename?: 'category_posts_aggregated'
  avg?: Maybe<Category_Posts_Aggregated_Fields>
  avgDistinct?: Maybe<Category_Posts_Aggregated_Fields>
  count?: Maybe<Category_Posts_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Category_Posts_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Category_Posts_Aggregated_Fields>
  min?: Maybe<Category_Posts_Aggregated_Fields>
  sum?: Maybe<Category_Posts_Aggregated_Fields>
  sumDistinct?: Maybe<Category_Posts_Aggregated_Fields>
}

export type Category_Posts_Aggregated_Count = {
  __typename?: 'category_posts_aggregated_count'
  category_posts_id?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Category_Posts_Aggregated_Fields = {
  __typename?: 'category_posts_aggregated_fields'
  category_posts_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type Category_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Category_Posts_Filter>>>
  category_posts_id?: InputMaybe<Category_Posts_Filter>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Category_Posts_Mutated = {
  __typename?: 'category_posts_mutated'
  data?: Maybe<Category_Posts>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>
}

export type Count_Functions = {
  __typename?: 'count_functions'
  count?: Maybe<Scalars['Int']['output']>
}

export type Course_Languages = {
  __typename?: 'course_languages'
  direction?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type Course_Languages_Aggregated = {
  __typename?: 'course_languages_aggregated'
  count?: Maybe<Course_Languages_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Course_Languages_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Course_Languages_Aggregated_Count = {
  __typename?: 'course_languages_aggregated_count'
  direction?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Course_Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Course_Languages_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Course_Languages_Filter>>>
  direction?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Course_Languages_Mutated = {
  __typename?: 'course_languages_mutated'
  data?: Maybe<Course_Languages>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses = {
  __typename?: 'courses'
  application_date?: Maybe<Scalars['Date']['output']>
  application_date_func?: Maybe<Date_Functions>
  bilinguals_id?: Maybe<Bilinguals>
  career_opportunities?: Maybe<Scalars['String']['output']>
  careers?: Maybe<Scalars['String']['output']>
  commercial_name?: Maybe<Scalars['String']['output']>
  course_intro?: Maybe<Scalars['String']['output']>
  degree_id?: Maybe<Scalars['Int']['output']>
  degree_type?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  ects?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<Scalars['String']['output']>
  info_blocks?: Maybe<Scalars['JSON']['output']>
  info_blocks_func?: Maybe<Count_Functions>
  is_dual?: Maybe<Scalars['Boolean']['output']>
  is_official?: Maybe<Scalars['Boolean']['output']>
  is_on_demand?: Maybe<Scalars['Boolean']['output']>
  languages_id?: Maybe<Course_Languages>
  learning_format: Scalars['String']['output']
  learning_pace: Scalars['String']['output']
  methology?: Maybe<Scalars['String']['output']>
  o_language?: Maybe<Languages>
  official_data_source?: Maybe<Scalars['String']['output']>
  requirements?: Maybe<Scalars['String']['output']>
  schedules?: Maybe<Scalars['String']['output']>
  standsfor?: Maybe<Scalars['JSON']['output']>
  standsfor_func?: Maybe<Count_Functions>
  start_date?: Maybe<Scalars['Date']['output']>
  start_date_func?: Maybe<Date_Functions>
  structure?: Maybe<Scalars['JSON']['output']>
  structure_func?: Maybe<Count_Functions>
  translations?: Maybe<Array<Maybe<Courses_Translations>>>
  translations_func?: Maybe<Count_Functions>
  tuition_price?: Maybe<Scalars['JSON']['output']>
  tuition_price_comment?: Maybe<Scalars['String']['output']>
  tuition_price_func?: Maybe<Count_Functions>
  type: Scalars['String']['output']
  url?: Maybe<Scalars['String']['output']>
  videos?: Maybe<Scalars['String']['output']>
}

export type CoursesBilinguals_IdArgs = {
  filter?: InputMaybe<Bilinguals_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesLanguages_IdArgs = {
  filter?: InputMaybe<Course_Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesO_LanguageArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesTranslationsArgs = {
  filter?: InputMaybe<Courses_Translations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Aggregated = {
  __typename?: 'courses_aggregated'
  avg?: Maybe<Courses_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Aggregated_Fields>
  count?: Maybe<Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Aggregated_Fields>
  min?: Maybe<Courses_Aggregated_Fields>
  sum?: Maybe<Courses_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Aggregated_Fields>
}

export type Courses_Aggregated_Count = {
  __typename?: 'courses_aggregated_count'
  application_date?: Maybe<Scalars['Int']['output']>
  bilinguals_id?: Maybe<Scalars['Int']['output']>
  career_opportunities?: Maybe<Scalars['Int']['output']>
  careers?: Maybe<Scalars['Int']['output']>
  commercial_name?: Maybe<Scalars['Int']['output']>
  course_intro?: Maybe<Scalars['Int']['output']>
  degree_id?: Maybe<Scalars['Int']['output']>
  degree_type?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  duration?: Maybe<Scalars['Int']['output']>
  ects?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  images?: Maybe<Scalars['Int']['output']>
  info_blocks?: Maybe<Scalars['Int']['output']>
  is_dual?: Maybe<Scalars['Int']['output']>
  is_official?: Maybe<Scalars['Int']['output']>
  is_on_demand?: Maybe<Scalars['Int']['output']>
  languages_id?: Maybe<Scalars['Int']['output']>
  learning_format?: Maybe<Scalars['Int']['output']>
  learning_pace?: Maybe<Scalars['Int']['output']>
  methology?: Maybe<Scalars['Int']['output']>
  o_language?: Maybe<Scalars['Int']['output']>
  official_data_source?: Maybe<Scalars['Int']['output']>
  requirements?: Maybe<Scalars['Int']['output']>
  schedules?: Maybe<Scalars['Int']['output']>
  standsfor?: Maybe<Scalars['Int']['output']>
  start_date?: Maybe<Scalars['Int']['output']>
  structure?: Maybe<Scalars['Int']['output']>
  translations?: Maybe<Scalars['Int']['output']>
  tuition_price?: Maybe<Scalars['Int']['output']>
  tuition_price_comment?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['Int']['output']>
  videos?: Maybe<Scalars['Int']['output']>
}

export type Courses_Aggregated_Fields = {
  __typename?: 'courses_aggregated_fields'
  degree_id?: Maybe<Scalars['Float']['output']>
  ects?: Maybe<Scalars['Float']['output']>
}

export type Courses_Category_Courses = {
  __typename?: 'courses_category_courses'
  category_courses_id?: Maybe<Category_Courses>
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
}

export type Courses_Category_CoursesCategory_Courses_IdArgs = {
  filter?: InputMaybe<Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Category_CoursesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Category_Courses_Aggregated = {
  __typename?: 'courses_category_courses_aggregated'
  count?: Maybe<Courses_Category_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Category_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Courses_Category_Courses_Aggregated_Count = {
  __typename?: 'courses_category_courses_aggregated_count'
  category_courses_id?: Maybe<Scalars['Int']['output']>
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Category_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Category_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Category_Courses_Filter>>>
  category_courses_id?: InputMaybe<Category_Courses_Filter>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<String_Filter_Operators>
}

export type Courses_Category_Courses_Mutated = {
  __typename?: 'courses_category_courses_mutated'
  data?: Maybe<Courses_Category_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Filter>>>
  application_date?: InputMaybe<Date_Filter_Operators>
  application_date_func?: InputMaybe<Date_Function_Filter_Operators>
  bilinguals_id?: InputMaybe<Bilinguals_Filter>
  career_opportunities?: InputMaybe<String_Filter_Operators>
  careers?: InputMaybe<String_Filter_Operators>
  commercial_name?: InputMaybe<String_Filter_Operators>
  course_intro?: InputMaybe<String_Filter_Operators>
  degree_id?: InputMaybe<Number_Filter_Operators>
  degree_type?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  duration?: InputMaybe<String_Filter_Operators>
  ects?: InputMaybe<Number_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  images?: InputMaybe<String_Filter_Operators>
  info_blocks?: InputMaybe<String_Filter_Operators>
  info_blocks_func?: InputMaybe<Count_Function_Filter_Operators>
  is_dual?: InputMaybe<Boolean_Filter_Operators>
  is_official?: InputMaybe<Boolean_Filter_Operators>
  is_on_demand?: InputMaybe<Boolean_Filter_Operators>
  languages_id?: InputMaybe<Course_Languages_Filter>
  learning_format?: InputMaybe<String_Filter_Operators>
  learning_pace?: InputMaybe<String_Filter_Operators>
  methology?: InputMaybe<String_Filter_Operators>
  o_language?: InputMaybe<Languages_Filter>
  official_data_source?: InputMaybe<String_Filter_Operators>
  requirements?: InputMaybe<String_Filter_Operators>
  schedules?: InputMaybe<String_Filter_Operators>
  standsfor?: InputMaybe<String_Filter_Operators>
  standsfor_func?: InputMaybe<Count_Function_Filter_Operators>
  start_date?: InputMaybe<Date_Filter_Operators>
  start_date_func?: InputMaybe<Date_Function_Filter_Operators>
  structure?: InputMaybe<String_Filter_Operators>
  structure_func?: InputMaybe<Count_Function_Filter_Operators>
  translations?: InputMaybe<Courses_Translations_Filter>
  translations_func?: InputMaybe<Count_Function_Filter_Operators>
  tuition_price?: InputMaybe<String_Filter_Operators>
  tuition_price_comment?: InputMaybe<String_Filter_Operators>
  tuition_price_func?: InputMaybe<Count_Function_Filter_Operators>
  type?: InputMaybe<String_Filter_Operators>
  url?: InputMaybe<String_Filter_Operators>
  videos?: InputMaybe<String_Filter_Operators>
}

export type Courses_Mutated = {
  __typename?: 'courses_mutated'
  data?: Maybe<Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Tag_Courses = {
  __typename?: 'courses_tag_courses'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  tag_courses_id?: Maybe<Tag_Courses>
}

export type Courses_Tag_CoursesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Tag_CoursesTag_Courses_IdArgs = {
  filter?: InputMaybe<Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Tag_Courses_Aggregated = {
  __typename?: 'courses_tag_courses_aggregated'
  count?: Maybe<Courses_Tag_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Tag_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Courses_Tag_Courses_Aggregated_Count = {
  __typename?: 'courses_tag_courses_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  tag_courses_id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Tag_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Tag_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Tag_Courses_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<String_Filter_Operators>
  tag_courses_id?: InputMaybe<Tag_Courses_Filter>
}

export type Courses_Tag_Courses_Mutated = {
  __typename?: 'courses_tag_courses_mutated'
  data?: Maybe<Courses_Tag_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Translations = {
  __typename?: 'courses_translations'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  languages_id?: Maybe<Languages>
}

export type Courses_TranslationsCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_TranslationsLanguages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Translations_Aggregated = {
  __typename?: 'courses_translations_aggregated'
  avg?: Maybe<Courses_Translations_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Translations_Aggregated_Fields>
  count?: Maybe<Courses_Translations_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Translations_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Translations_Aggregated_Fields>
  min?: Maybe<Courses_Translations_Aggregated_Fields>
  sum?: Maybe<Courses_Translations_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Translations_Aggregated_Fields>
}

export type Courses_Translations_Aggregated_Count = {
  __typename?: 'courses_translations_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  languages_id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Translations_Aggregated_Fields = {
  __typename?: 'courses_translations_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Translations_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Translations_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
  languages_id?: InputMaybe<Languages_Filter>
}

export type Courses_Translations_Mutated = {
  __typename?: 'courses_translations_mutated'
  data?: Maybe<Courses_Translations>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Create_Allowed_Setting_Value_Input = {
  caption?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  item_value?: InputMaybe<Scalars['String']['input']>
  settings_id?: InputMaybe<Create_Settings_Input>
}

export type Create_Bilinguals_Input = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
}

export type Create_Blocks_Input = {
  blocks_id?: InputMaybe<Create_Blocks_Input>
  id: Scalars['ID']['input']
  schema?: InputMaybe<Scalars['JSON']['input']>
}

export type Create_Campuses_Courses_Input = {
  campuses_id?: InputMaybe<Create_Campuses_Input>
  courses_id?: InputMaybe<Create_Courses_Input>
  id: Scalars['ID']['input']
}

export type Create_Campuses_Input = {
  city?: InputMaybe<Scalars['String']['input']>
  country?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  images?: InputMaybe<Scalars['String']['input']>
  institutions_id?: InputMaybe<Create_Institutions_Input>
  intro?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  street_address?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Create_Category_Courses_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  seo_template_id?: InputMaybe<Create_Seo_Template_Input>
  tag_courses_id?: InputMaybe<Create_Tag_Courses_Input>
}

export type Create_Category_Posts_Input = {
  category_posts_id?: InputMaybe<Create_Category_Posts_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Course_Languages_Input = {
  direction?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Courses_Category_Courses_Input = {
  category_courses_id?: InputMaybe<Create_Category_Courses_Input>
  courses_id?: InputMaybe<Create_Courses_Input>
  id: Scalars['ID']['input']
}

export type Create_Courses_Input = {
  application_date?: InputMaybe<Scalars['Date']['input']>
  bilinguals_id?: InputMaybe<Create_Bilinguals_Input>
  career_opportunities?: InputMaybe<Scalars['String']['input']>
  careers?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  course_intro?: InputMaybe<Scalars['String']['input']>
  degree_id?: InputMaybe<Scalars['Int']['input']>
  degree_type?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['String']['input']>
  ects?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['ID']['input']
  images?: InputMaybe<Scalars['String']['input']>
  info_blocks?: InputMaybe<Scalars['JSON']['input']>
  is_dual?: InputMaybe<Scalars['Boolean']['input']>
  is_official?: InputMaybe<Scalars['Boolean']['input']>
  is_on_demand?: InputMaybe<Scalars['Boolean']['input']>
  languages_id?: InputMaybe<Create_Course_Languages_Input>
  learning_format: Scalars['String']['input']
  learning_pace: Scalars['String']['input']
  methology?: InputMaybe<Scalars['String']['input']>
  o_language?: InputMaybe<Create_Languages_Input>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  requirements?: InputMaybe<Scalars['String']['input']>
  schedules?: InputMaybe<Scalars['String']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
  start_date?: InputMaybe<Scalars['Date']['input']>
  structure?: InputMaybe<Scalars['JSON']['input']>
  translations?: InputMaybe<Array<InputMaybe<Create_Courses_Translations_Input>>>
  tuition_price?: InputMaybe<Scalars['JSON']['input']>
  tuition_price_comment?: InputMaybe<Scalars['String']['input']>
  type: Scalars['String']['input']
  url?: InputMaybe<Scalars['String']['input']>
  videos?: InputMaybe<Scalars['String']['input']>
}

export type Create_Courses_Tag_Courses_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id: Scalars['ID']['input']
  tag_courses_id?: InputMaybe<Create_Tag_Courses_Input>
}

export type Create_Courses_Translations_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  languages_id?: InputMaybe<Create_Languages_Input>
}

export type Create_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  policy?: InputMaybe<Create_Directus_Policies_Input>
  role?: InputMaybe<Create_Directus_Roles_Input>
  sort?: InputMaybe<Scalars['Int']['input']>
  user?: InputMaybe<Create_Directus_Users_Input>
}

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>
  created_on?: InputMaybe<Scalars['Date']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['Int']['input']>
  embed?: InputMaybe<Scalars['String']['input']>
  filename_disk?: InputMaybe<Scalars['String']['input']>
  filename_download: Scalars['String']['input']
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  focal_point_x?: InputMaybe<Scalars['Int']['input']>
  focal_point_y?: InputMaybe<Scalars['Int']['input']>
  folder?: InputMaybe<Create_Directus_Folders_Input>
  height?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['JSON']['input']>
  modified_by?: InputMaybe<Create_Directus_Users_Input>
  modified_on?: InputMaybe<Scalars['Date']['input']>
  storage: Scalars['String']['input']
  tags?: InputMaybe<Scalars['JSON']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  tus_data?: InputMaybe<Scalars['JSON']['input']>
  tus_id?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>
  uploaded_on?: InputMaybe<Scalars['Date']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name: Scalars['String']['input']
  parent?: InputMaybe<Create_Directus_Folders_Input>
}

export type Create_Directus_Permissions_Input = {
  action: Scalars['String']['input']
  collection: Scalars['String']['input']
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  permissions?: InputMaybe<Scalars['JSON']['input']>
  policy?: InputMaybe<Create_Directus_Policies_Input>
  presets?: InputMaybe<Scalars['JSON']['input']>
  validation?: InputMaybe<Scalars['JSON']['input']>
}

export type Create_Directus_Policies_Input = {
  admin_access: Scalars['Boolean']['input']
  app_access: Scalars['Boolean']['input']
  description?: InputMaybe<Scalars['String']['input']>
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['input']
  icon?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name: Scalars['String']['input']
  permissions?: InputMaybe<Array<InputMaybe<Create_Directus_Permissions_Input>>>
  roles?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>
}

export type Create_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<Create_Directus_Roles_Input>>>
  description?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name: Scalars['String']['input']
  parent?: InputMaybe<Create_Directus_Roles_Input>
  policies?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>
}

export type Create_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>
  auth_data?: InputMaybe<Scalars['JSON']['input']>
  avatar?: InputMaybe<Create_Directus_Files_Input>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>
  external_identifier?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  last_access?: InputMaybe<Scalars['Date']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  last_page?: InputMaybe<Scalars['String']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['Hash']['input']>
  policies?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>
  provider?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Create_Directus_Roles_Input>
  status?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Scalars['JSON']['input']>
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>
  theme_dark?: InputMaybe<Scalars['String']['input']>
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>
  theme_light?: InputMaybe<Scalars['String']['input']>
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  token?: InputMaybe<Scalars['Hash']['input']>
}

export type Create_Folders_Input = {
  id: Scalars['ID']['input']
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Create_Folders_Input>
}

export type Create_Institutions_Input = {
  acronym?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  images?: InputMaybe<Scalars['String']['input']>
  intro?: InputMaybe<Scalars['String']['input']>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  ownership?: InputMaybe<Scalars['String']['input']>
  rank_and_rec?: InputMaybe<Scalars['JSON']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
  top_masters?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  videos?: InputMaybe<Scalars['String']['input']>
}

export type Create_Institutions_Scholarships_Courses_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id: Scalars['ID']['input']
  institutions_id?: InputMaybe<Create_Institutions_Input>
  scholarships_id?: InputMaybe<Create_Scholarships_Input>
}

export type Create_Institutions_Tag_Institutions_Input = {
  id: Scalars['ID']['input']
  institutions_id?: InputMaybe<Create_Institutions_Input>
  tag_institutions_id?: InputMaybe<Create_Tag_Institutions_Input>
}

export type Create_Languages_Input = {
  id: Scalars['ID']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Menu_Items_Courses_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id: Scalars['ID']['input']
  menu_items_id?: InputMaybe<Create_Menu_Items_Input>
}

export type Create_Menu_Items_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  menu_item_id?: InputMaybe<Create_Menu_Items_Input>
  menu_item_relationship_id: Scalars['String']['input']
  menu_order?: InputMaybe<Scalars['Int']['input']>
  menus_id?: InputMaybe<Create_Menus_Input>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type Create_Menu_Items_Pages_Input = {
  id: Scalars['ID']['input']
  menu_items_id?: InputMaybe<Create_Menu_Items_Input>
  pages_id?: InputMaybe<Create_Pages_Input>
}

export type Create_Menus_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Page_Blocks_Input = {
  blocks_id?: InputMaybe<Create_Blocks_Input>
  id: Scalars['ID']['input']
  pages_id?: InputMaybe<Create_Pages_Input>
}

export type Create_Pages_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  seo_template_id: Scalars['String']['input']
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type Create_Posts_Category_Posts_Input = {
  category_posts_id?: InputMaybe<Create_Category_Posts_Input>
  id: Scalars['ID']['input']
  posts_id?: InputMaybe<Create_Posts_Input>
}

export type Create_Posts_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  excerpt?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  seo_template_id?: InputMaybe<Create_Seo_Template_Input>
  title?: InputMaybe<Scalars['String']['input']>
}

export type Create_Posts_Tag_Posts_Input = {
  id: Scalars['ID']['input']
  posts_id?: InputMaybe<Create_Posts_Input>
  tag_posts_id?: InputMaybe<Create_Tag_Posts_Input>
}

export type Create_Profiles_Input = {
  content_title?: InputMaybe<Scalars['String']['input']>
  courses_id?: InputMaybe<Create_Courses_Input>
  data?: InputMaybe<Scalars['JSON']['input']>
  id: Scalars['ID']['input']
  students?: InputMaybe<Scalars['JSON']['input']>
  target?: InputMaybe<Scalars['JSON']['input']>
}

export type Create_Questions_Input = {
  close_question?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  languages_id?: InputMaybe<Create_Languages_Input>
  option_answer?: InputMaybe<Scalars['String']['input']>
  option_answers?: InputMaybe<Scalars['JSON']['input']>
  text?: InputMaybe<Scalars['String']['input']>
}

export type Create_Reports_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  data?: InputMaybe<Scalars['JSON']['input']>
  date?: InputMaybe<Scalars['Date']['input']>
  id: Scalars['ID']['input']
  institutions_id?: InputMaybe<Create_Institutions_Input>
  internal_code?: InputMaybe<Scalars['String']['input']>
  is_validated?: InputMaybe<Scalars['Boolean']['input']>
  o_languages_id?: InputMaybe<Create_Languages_Input>
  users_id?: InputMaybe<Create_Users_Input>
}

export type Create_Reports_Questions_Input = {
  id: Scalars['ID']['input']
  questions_id?: InputMaybe<Create_Questions_Input>
  reports_id?: InputMaybe<Create_Reports_Input>
}

export type Create_Scholarships_Input = {
  academic_course?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  o_languages_id?: InputMaybe<Create_Languages_Input>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Create_Seo_Template_Block_Input = {
  blocks_id?: InputMaybe<Create_Blocks_Input>
  id: Scalars['ID']['input']
  seo_template_id?: InputMaybe<Create_Seo_Template_Input>
}

export type Create_Seo_Template_Input = {
  directus_files_id: Scalars['String']['input']
  id: Scalars['ID']['input']
  meta_description?: InputMaybe<Scalars['String']['input']>
  meta_title?: InputMaybe<Scalars['String']['input']>
}

export type Create_Settings_Input = {
  constrained?: InputMaybe<Scalars['Boolean']['input']>
  data_type?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
}

export type Create_Tag_Courses_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
  seo_template_id?: InputMaybe<Create_Seo_Template_Input>
  tag_courses_id?: InputMaybe<Create_Tag_Courses_Input>
}

export type Create_Tag_Institutions_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Tag_Posts_Input = {
  category_posts_id?: InputMaybe<Create_Category_Posts_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Test_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  sort?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  user_created?: InputMaybe<Create_Directus_Users_Input>
}

export type Create_User_Setting_Input = {
  allowed_setting_value_id?: InputMaybe<Create_Allowed_Setting_Value_Input>
  id: Scalars['ID']['input']
  settings_id?: InputMaybe<Create_Settings_Input>
  unconstrained_value?: InputMaybe<Scalars['String']['input']>
  users_id?: InputMaybe<Create_Users_Input>
}

export type Create_Users_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  birth_date?: InputMaybe<Scalars['Date']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  family_name?: InputMaybe<Scalars['String']['input']>
  family_name_2?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id: Scalars['ID']['input']
  middle_name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
}

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>
  _neq?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  _nnull?: InputMaybe<Scalars['Boolean']['input']>
  _null?: InputMaybe<Scalars['Boolean']['input']>
}

export type Date_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>
  month?: InputMaybe<Number_Filter_Operators>
  week?: InputMaybe<Number_Filter_Operators>
  weekday?: InputMaybe<Number_Filter_Operators>
  year?: InputMaybe<Number_Filter_Operators>
}

export type Date_Functions = {
  __typename?: 'date_functions'
  day?: Maybe<Scalars['Int']['output']>
  month?: Maybe<Scalars['Int']['output']>
  week?: Maybe<Scalars['Int']['output']>
  weekday?: Maybe<Scalars['Int']['output']>
  year?: Maybe<Scalars['Int']['output']>
}

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>
  hour?: InputMaybe<Number_Filter_Operators>
  minute?: InputMaybe<Number_Filter_Operators>
  month?: InputMaybe<Number_Filter_Operators>
  second?: InputMaybe<Number_Filter_Operators>
  week?: InputMaybe<Number_Filter_Operators>
  weekday?: InputMaybe<Number_Filter_Operators>
  year?: InputMaybe<Number_Filter_Operators>
}

export type Datetime_Functions = {
  __typename?: 'datetime_functions'
  day?: Maybe<Scalars['Int']['output']>
  hour?: Maybe<Scalars['Int']['output']>
  minute?: Maybe<Scalars['Int']['output']>
  month?: Maybe<Scalars['Int']['output']>
  second?: Maybe<Scalars['Int']['output']>
  week?: Maybe<Scalars['Int']['output']>
  weekday?: Maybe<Scalars['Int']['output']>
  year?: Maybe<Scalars['Int']['output']>
}

export type Delete_Many = {
  __typename?: 'delete_many'
  ids: Array<Maybe<Scalars['ID']['output']>>
}

export type Delete_One = {
  __typename?: 'delete_one'
  id: Scalars['ID']['output']
}

export type Directus_Access = {
  __typename?: 'directus_access'
  id: Scalars['ID']['output']
  policy?: Maybe<Directus_Policies>
  role?: Maybe<Directus_Roles>
  sort?: Maybe<Scalars['Int']['output']>
  user?: Maybe<Directus_Users>
}

export type Directus_AccessPolicyArgs = {
  filter?: InputMaybe<Directus_Policies_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_AccessRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_AccessUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Access_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  policy?: InputMaybe<Directus_Policies_Filter>
  role?: InputMaybe<Directus_Roles_Filter>
  sort?: InputMaybe<Number_Filter_Operators>
  user?: InputMaybe<Directus_Users_Filter>
}

export type Directus_Access_Mutated = {
  __typename?: 'directus_access_mutated'
  data?: Maybe<Directus_Access>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Activity = {
  __typename?: 'directus_activity'
  action: Scalars['String']['output']
  collection: Scalars['String']['output']
  comment?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  ip?: Maybe<Scalars['String']['output']>
  item: Scalars['String']['output']
  origin?: Maybe<Scalars['String']['output']>
  revisions?: Maybe<Array<Maybe<Directus_Revisions>>>
  revisions_func?: Maybe<Count_Functions>
  timestamp?: Maybe<Scalars['Date']['output']>
  timestamp_func?: Maybe<Datetime_Functions>
  user?: Maybe<Directus_Users>
  user_agent?: Maybe<Scalars['String']['output']>
}

export type Directus_ActivityRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_ActivityUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>
  action?: InputMaybe<String_Filter_Operators>
  collection?: InputMaybe<String_Filter_Operators>
  comment?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  ip?: InputMaybe<String_Filter_Operators>
  item?: InputMaybe<String_Filter_Operators>
  origin?: InputMaybe<String_Filter_Operators>
  revisions?: InputMaybe<Directus_Revisions_Filter>
  revisions_func?: InputMaybe<Count_Function_Filter_Operators>
  timestamp?: InputMaybe<Date_Filter_Operators>
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>
  user?: InputMaybe<Directus_Users_Filter>
  user_agent?: InputMaybe<String_Filter_Operators>
}

export type Directus_Activity_Mutated = {
  __typename?: 'directus_activity_mutated'
  data?: Maybe<Directus_Activity>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Comments = {
  __typename?: 'directus_comments'
  collection: Scalars['String']['output']
  comment: Scalars['String']['output']
  date_created?: Maybe<Scalars['Date']['output']>
  date_created_func?: Maybe<Datetime_Functions>
  date_updated?: Maybe<Scalars['Date']['output']>
  date_updated_func?: Maybe<Datetime_Functions>
  id: Scalars['ID']['output']
  item: Scalars['String']['output']
  user_created?: Maybe<Directus_Users>
  user_updated?: Maybe<Directus_Users>
}

export type Directus_CommentsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_CommentsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Comments_Mutated = {
  __typename?: 'directus_comments_mutated'
  data?: Maybe<Directus_Comments>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Dashboards = {
  __typename?: 'directus_dashboards'
  color?: Maybe<Scalars['String']['output']>
  date_created?: Maybe<Scalars['Date']['output']>
  date_created_func?: Maybe<Datetime_Functions>
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  note?: Maybe<Scalars['String']['output']>
  panels?: Maybe<Array<Maybe<Directus_Panels>>>
  panels_func?: Maybe<Count_Functions>
  user_created?: Maybe<Directus_Users>
}

export type Directus_DashboardsPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>
  color?: InputMaybe<String_Filter_Operators>
  date_created?: InputMaybe<Date_Filter_Operators>
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>
  icon?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  note?: InputMaybe<String_Filter_Operators>
  panels?: InputMaybe<Directus_Panels_Filter>
  panels_func?: InputMaybe<Count_Function_Filter_Operators>
  user_created?: InputMaybe<Directus_Users_Filter>
}

export type Directus_Dashboards_Mutated = {
  __typename?: 'directus_dashboards_mutated'
  data?: Maybe<Directus_Dashboards>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Files = {
  __typename?: 'directus_files'
  charset?: Maybe<Scalars['String']['output']>
  created_on?: Maybe<Scalars['Date']['output']>
  created_on_func?: Maybe<Datetime_Functions>
  description?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['Int']['output']>
  embed?: Maybe<Scalars['String']['output']>
  filename_disk?: Maybe<Scalars['String']['output']>
  filename_download: Scalars['String']['output']
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>
  focal_point_x?: Maybe<Scalars['Int']['output']>
  focal_point_y?: Maybe<Scalars['Int']['output']>
  folder?: Maybe<Directus_Folders>
  height?: Maybe<Scalars['Int']['output']>
  id: Scalars['ID']['output']
  location?: Maybe<Scalars['String']['output']>
  metadata?: Maybe<Scalars['JSON']['output']>
  metadata_func?: Maybe<Count_Functions>
  modified_by?: Maybe<Directus_Users>
  modified_on?: Maybe<Scalars['Date']['output']>
  modified_on_func?: Maybe<Datetime_Functions>
  storage: Scalars['String']['output']
  tags?: Maybe<Scalars['JSON']['output']>
  tags_func?: Maybe<Count_Functions>
  title?: Maybe<Scalars['String']['output']>
  tus_data?: Maybe<Scalars['JSON']['output']>
  tus_data_func?: Maybe<Count_Functions>
  tus_id?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  uploaded_by?: Maybe<Directus_Users>
  uploaded_on?: Maybe<Scalars['Date']['output']>
  uploaded_on_func?: Maybe<Datetime_Functions>
  width?: Maybe<Scalars['Int']['output']>
}

export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>
  charset?: InputMaybe<String_Filter_Operators>
  created_on?: InputMaybe<Date_Filter_Operators>
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  duration?: InputMaybe<Number_Filter_Operators>
  embed?: InputMaybe<String_Filter_Operators>
  filename_disk?: InputMaybe<String_Filter_Operators>
  filename_download?: InputMaybe<String_Filter_Operators>
  filesize?: InputMaybe<Big_Int_Filter_Operators>
  focal_point_x?: InputMaybe<Number_Filter_Operators>
  focal_point_y?: InputMaybe<Number_Filter_Operators>
  folder?: InputMaybe<Directus_Folders_Filter>
  height?: InputMaybe<Number_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  location?: InputMaybe<String_Filter_Operators>
  metadata?: InputMaybe<String_Filter_Operators>
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>
  modified_by?: InputMaybe<Directus_Users_Filter>
  modified_on?: InputMaybe<Date_Filter_Operators>
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>
  storage?: InputMaybe<String_Filter_Operators>
  tags?: InputMaybe<String_Filter_Operators>
  tags_func?: InputMaybe<Count_Function_Filter_Operators>
  title?: InputMaybe<String_Filter_Operators>
  tus_data?: InputMaybe<String_Filter_Operators>
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>
  tus_id?: InputMaybe<String_Filter_Operators>
  type?: InputMaybe<String_Filter_Operators>
  uploaded_by?: InputMaybe<Directus_Users_Filter>
  uploaded_on?: InputMaybe<Date_Filter_Operators>
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>
  width?: InputMaybe<Number_Filter_Operators>
}

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated'
  data?: Maybe<Directus_Files>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Flows = {
  __typename?: 'directus_flows'
  accountability?: Maybe<Scalars['String']['output']>
  color?: Maybe<Scalars['String']['output']>
  date_created?: Maybe<Scalars['Date']['output']>
  date_created_func?: Maybe<Datetime_Functions>
  description?: Maybe<Scalars['String']['output']>
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  operation?: Maybe<Directus_Operations>
  operations?: Maybe<Array<Maybe<Directus_Operations>>>
  operations_func?: Maybe<Count_Functions>
  options?: Maybe<Scalars['JSON']['output']>
  options_func?: Maybe<Count_Functions>
  status?: Maybe<Scalars['String']['output']>
  trigger?: Maybe<Scalars['String']['output']>
  user_created?: Maybe<Directus_Users>
}

export type Directus_FlowsOperationArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_FlowsOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>
  accountability?: InputMaybe<String_Filter_Operators>
  color?: InputMaybe<String_Filter_Operators>
  date_created?: InputMaybe<Date_Filter_Operators>
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  icon?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  operation?: InputMaybe<Directus_Operations_Filter>
  operations?: InputMaybe<Directus_Operations_Filter>
  operations_func?: InputMaybe<Count_Function_Filter_Operators>
  options?: InputMaybe<String_Filter_Operators>
  options_func?: InputMaybe<Count_Function_Filter_Operators>
  status?: InputMaybe<String_Filter_Operators>
  trigger?: InputMaybe<String_Filter_Operators>
  user_created?: InputMaybe<Directus_Users_Filter>
}

export type Directus_Flows_Mutated = {
  __typename?: 'directus_flows_mutated'
  data?: Maybe<Directus_Flows>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Folders = {
  __typename?: 'directus_folders'
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  parent?: Maybe<Directus_Folders>
}

export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  parent?: InputMaybe<Directus_Folders_Filter>
}

export type Directus_Folders_Mutated = {
  __typename?: 'directus_folders_mutated'
  data?: Maybe<Directus_Folders>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Notifications = {
  __typename?: 'directus_notifications'
  collection?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  item?: Maybe<Scalars['String']['output']>
  message?: Maybe<Scalars['String']['output']>
  recipient?: Maybe<Directus_Users>
  sender?: Maybe<Directus_Users>
  status?: Maybe<Scalars['String']['output']>
  subject: Scalars['String']['output']
  timestamp?: Maybe<Scalars['Date']['output']>
  timestamp_func?: Maybe<Datetime_Functions>
}

export type Directus_NotificationsRecipientArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_NotificationsSenderArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Notifications_Mutated = {
  __typename?: 'directus_notifications_mutated'
  data?: Maybe<Directus_Notifications>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Operations = {
  __typename?: 'directus_operations'
  date_created?: Maybe<Scalars['Date']['output']>
  date_created_func?: Maybe<Datetime_Functions>
  flow?: Maybe<Directus_Flows>
  id: Scalars['ID']['output']
  key: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  options?: Maybe<Scalars['JSON']['output']>
  options_func?: Maybe<Count_Functions>
  position_x: Scalars['Int']['output']
  position_y: Scalars['Int']['output']
  reject?: Maybe<Directus_Operations>
  resolve?: Maybe<Directus_Operations>
  type: Scalars['String']['output']
  user_created?: Maybe<Directus_Users>
}

export type Directus_OperationsFlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_OperationsRejectArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_OperationsResolveArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>
  date_created?: InputMaybe<Date_Filter_Operators>
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>
  flow?: InputMaybe<Directus_Flows_Filter>
  id?: InputMaybe<String_Filter_Operators>
  key?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  options?: InputMaybe<String_Filter_Operators>
  options_func?: InputMaybe<Count_Function_Filter_Operators>
  position_x?: InputMaybe<Number_Filter_Operators>
  position_y?: InputMaybe<Number_Filter_Operators>
  reject?: InputMaybe<Directus_Operations_Filter>
  resolve?: InputMaybe<Directus_Operations_Filter>
  type?: InputMaybe<String_Filter_Operators>
  user_created?: InputMaybe<Directus_Users_Filter>
}

export type Directus_Operations_Mutated = {
  __typename?: 'directus_operations_mutated'
  data?: Maybe<Directus_Operations>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Panels = {
  __typename?: 'directus_panels'
  color?: Maybe<Scalars['String']['output']>
  dashboard?: Maybe<Directus_Dashboards>
  date_created?: Maybe<Scalars['Date']['output']>
  date_created_func?: Maybe<Datetime_Functions>
  height: Scalars['Int']['output']
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  note?: Maybe<Scalars['String']['output']>
  options?: Maybe<Scalars['JSON']['output']>
  options_func?: Maybe<Count_Functions>
  position_x: Scalars['Int']['output']
  position_y: Scalars['Int']['output']
  show_header: Scalars['Boolean']['output']
  type: Scalars['String']['output']
  user_created?: Maybe<Directus_Users>
  width: Scalars['Int']['output']
}

export type Directus_PanelsDashboardArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>
  color?: InputMaybe<String_Filter_Operators>
  dashboard?: InputMaybe<Directus_Dashboards_Filter>
  date_created?: InputMaybe<Date_Filter_Operators>
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>
  height?: InputMaybe<Number_Filter_Operators>
  icon?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  note?: InputMaybe<String_Filter_Operators>
  options?: InputMaybe<String_Filter_Operators>
  options_func?: InputMaybe<Count_Function_Filter_Operators>
  position_x?: InputMaybe<Number_Filter_Operators>
  position_y?: InputMaybe<Number_Filter_Operators>
  show_header?: InputMaybe<Boolean_Filter_Operators>
  type?: InputMaybe<String_Filter_Operators>
  user_created?: InputMaybe<Directus_Users_Filter>
  width?: InputMaybe<Number_Filter_Operators>
}

export type Directus_Panels_Mutated = {
  __typename?: 'directus_panels_mutated'
  data?: Maybe<Directus_Panels>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Permissions = {
  __typename?: 'directus_permissions'
  action: Scalars['String']['output']
  collection: Scalars['String']['output']
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  id?: Maybe<Scalars['ID']['output']>
  permissions?: Maybe<Scalars['JSON']['output']>
  permissions_func?: Maybe<Count_Functions>
  policy?: Maybe<Directus_Policies>
  presets?: Maybe<Scalars['JSON']['output']>
  presets_func?: Maybe<Count_Functions>
  validation?: Maybe<Scalars['JSON']['output']>
  validation_func?: Maybe<Count_Functions>
}

export type Directus_PermissionsPolicyArgs = {
  filter?: InputMaybe<Directus_Policies_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>
  action?: InputMaybe<String_Filter_Operators>
  collection?: InputMaybe<String_Filter_Operators>
  fields?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  permissions?: InputMaybe<String_Filter_Operators>
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>
  policy?: InputMaybe<Directus_Policies_Filter>
  presets?: InputMaybe<String_Filter_Operators>
  presets_func?: InputMaybe<Count_Function_Filter_Operators>
  validation?: InputMaybe<String_Filter_Operators>
  validation_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Directus_Permissions_Mutated = {
  __typename?: 'directus_permissions_mutated'
  data?: Maybe<Directus_Permissions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Policies = {
  __typename?: 'directus_policies'
  admin_access: Scalars['Boolean']['output']
  app_access: Scalars['Boolean']['output']
  description?: Maybe<Scalars['String']['output']>
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['output']
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  name: Scalars['String']['output']
  permissions?: Maybe<Array<Maybe<Directus_Permissions>>>
  permissions_func?: Maybe<Count_Functions>
  roles?: Maybe<Array<Maybe<Directus_Access>>>
  roles_func?: Maybe<Count_Functions>
  users?: Maybe<Array<Maybe<Directus_Access>>>
  users_func?: Maybe<Count_Functions>
}

export type Directus_PoliciesPermissionsArgs = {
  filter?: InputMaybe<Directus_Permissions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_PoliciesRolesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_PoliciesUsersArgs = {
  filter?: InputMaybe<Directus_Access_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Policies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>
  admin_access?: InputMaybe<Boolean_Filter_Operators>
  app_access?: InputMaybe<Boolean_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>
  icon?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  ip_access?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  permissions?: InputMaybe<Directus_Permissions_Filter>
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>
  roles?: InputMaybe<Directus_Access_Filter>
  roles_func?: InputMaybe<Count_Function_Filter_Operators>
  users?: InputMaybe<Directus_Access_Filter>
  users_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Directus_Policies_Mutated = {
  __typename?: 'directus_policies_mutated'
  data?: Maybe<Directus_Policies>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Presets = {
  __typename?: 'directus_presets'
  bookmark?: Maybe<Scalars['String']['output']>
  collection?: Maybe<Scalars['String']['output']>
  color?: Maybe<Scalars['String']['output']>
  filter?: Maybe<Scalars['JSON']['output']>
  filter_func?: Maybe<Count_Functions>
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  layout?: Maybe<Scalars['String']['output']>
  layout_options?: Maybe<Scalars['JSON']['output']>
  layout_options_func?: Maybe<Count_Functions>
  layout_query?: Maybe<Scalars['JSON']['output']>
  layout_query_func?: Maybe<Count_Functions>
  refresh_interval?: Maybe<Scalars['Int']['output']>
  role?: Maybe<Directus_Roles>
  search?: Maybe<Scalars['String']['output']>
  user?: Maybe<Directus_Users>
}

export type Directus_PresetsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_PresetsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Presets_Mutated = {
  __typename?: 'directus_presets_mutated'
  data?: Maybe<Directus_Presets>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Revisions = {
  __typename?: 'directus_revisions'
  activity?: Maybe<Directus_Activity>
  collection: Scalars['String']['output']
  data?: Maybe<Scalars['JSON']['output']>
  data_func?: Maybe<Count_Functions>
  delta?: Maybe<Scalars['JSON']['output']>
  delta_func?: Maybe<Count_Functions>
  id: Scalars['ID']['output']
  item: Scalars['String']['output']
  parent?: Maybe<Directus_Revisions>
  version?: Maybe<Directus_Versions>
}

export type Directus_RevisionsActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_RevisionsParentArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_RevisionsVersionArgs = {
  filter?: InputMaybe<Directus_Versions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>
  activity?: InputMaybe<Directus_Activity_Filter>
  collection?: InputMaybe<String_Filter_Operators>
  data?: InputMaybe<String_Filter_Operators>
  data_func?: InputMaybe<Count_Function_Filter_Operators>
  delta?: InputMaybe<String_Filter_Operators>
  delta_func?: InputMaybe<Count_Function_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  item?: InputMaybe<String_Filter_Operators>
  parent?: InputMaybe<Directus_Revisions_Filter>
  version?: InputMaybe<Directus_Versions_Filter>
}

export type Directus_Revisions_Mutated = {
  __typename?: 'directus_revisions_mutated'
  data?: Maybe<Directus_Revisions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Roles = {
  __typename?: 'directus_roles'
  children?: Maybe<Array<Maybe<Directus_Roles>>>
  children_func?: Maybe<Count_Functions>
  description?: Maybe<Scalars['String']['output']>
  icon?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  parent?: Maybe<Directus_Roles>
  policies?: Maybe<Array<Maybe<Directus_Access>>>
  policies_func?: Maybe<Count_Functions>
  users?: Maybe<Array<Maybe<Directus_Users>>>
  users_func?: Maybe<Count_Functions>
}

export type Directus_RolesChildrenArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_RolesParentArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_RolesPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>
  children?: InputMaybe<Directus_Roles_Filter>
  children_func?: InputMaybe<Count_Function_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  icon?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  parent?: InputMaybe<Directus_Roles_Filter>
  policies?: InputMaybe<Directus_Access_Filter>
  policies_func?: InputMaybe<Count_Function_Filter_Operators>
  users?: InputMaybe<Directus_Users_Filter>
  users_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Directus_Roles_Mutated = {
  __typename?: 'directus_roles_mutated'
  data?: Maybe<Directus_Roles>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Settings = {
  __typename?: 'directus_settings'
  auth_login_attempts?: Maybe<Scalars['Int']['output']>
  auth_password_policy?: Maybe<Scalars['String']['output']>
  basemaps?: Maybe<Scalars['JSON']['output']>
  basemaps_func?: Maybe<Count_Functions>
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>
  custom_aspect_ratios_func?: Maybe<Count_Functions>
  custom_css?: Maybe<Scalars['String']['output']>
  default_appearance?: Maybe<Scalars['String']['output']>
  default_language?: Maybe<Scalars['String']['output']>
  default_theme_dark?: Maybe<Scalars['String']['output']>
  default_theme_light?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  mapbox_key?: Maybe<Scalars['String']['output']>
  module_bar?: Maybe<Scalars['JSON']['output']>
  module_bar_func?: Maybe<Count_Functions>
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>
  project_descriptor?: Maybe<Scalars['String']['output']>
  project_logo?: Maybe<Directus_Files>
  project_name?: Maybe<Scalars['String']['output']>
  project_url?: Maybe<Scalars['String']['output']>
  public_background?: Maybe<Directus_Files>
  public_favicon?: Maybe<Directus_Files>
  public_foreground?: Maybe<Directus_Files>
  public_note?: Maybe<Scalars['String']['output']>
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output']
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter?: Maybe<Scalars['JSON']['output']>
  public_registration_email_filter_func?: Maybe<Count_Functions>
  public_registration_role?: Maybe<Directus_Roles>
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email?: Maybe<Scalars['Boolean']['output']>
  report_bug_url?: Maybe<Scalars['String']['output']>
  report_error_url?: Maybe<Scalars['String']['output']>
  report_feature_url?: Maybe<Scalars['String']['output']>
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>
  storage_asset_presets_func?: Maybe<Count_Functions>
  storage_asset_transform?: Maybe<Scalars['String']['output']>
  storage_default_folder?: Maybe<Directus_Folders>
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>
  theme_dark_overrides_func?: Maybe<Count_Functions>
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>
  theme_light_overrides_func?: Maybe<Count_Functions>
}

export type Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_SettingsPublic_FaviconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_SettingsPublic_Registration_RoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Settings_Mutated = {
  __typename?: 'directus_settings_mutated'
  data?: Maybe<Directus_Settings>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Shares = {
  __typename?: 'directus_shares'
  collection: Scalars['String']['output']
  date_created?: Maybe<Scalars['Date']['output']>
  date_created_func?: Maybe<Datetime_Functions>
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>
  date_end_func?: Maybe<Datetime_Functions>
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>
  date_start_func?: Maybe<Datetime_Functions>
  id: Scalars['ID']['output']
  item: Scalars['String']['output']
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Hash']['output']>
  role?: Maybe<Directus_Roles>
  times_used?: Maybe<Scalars['Int']['output']>
  user_created?: Maybe<Directus_Users>
}

export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Shares_Mutated = {
  __typename?: 'directus_shares_mutated'
  data?: Maybe<Directus_Shares>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Translations = {
  __typename?: 'directus_translations'
  id: Scalars['ID']['output']
  key: Scalars['String']['output']
  language: Scalars['String']['output']
  value: Scalars['String']['output']
}

export type Directus_Translations_Mutated = {
  __typename?: 'directus_translations_mutated'
  data?: Maybe<Directus_Translations>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Users = {
  __typename?: 'directus_users'
  appearance?: Maybe<Scalars['String']['output']>
  auth_data?: Maybe<Scalars['JSON']['output']>
  auth_data_func?: Maybe<Count_Functions>
  avatar?: Maybe<Directus_Files>
  description?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  email_notifications?: Maybe<Scalars['Boolean']['output']>
  external_identifier?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  language?: Maybe<Scalars['String']['output']>
  last_access?: Maybe<Scalars['Date']['output']>
  last_access_func?: Maybe<Datetime_Functions>
  last_name?: Maybe<Scalars['String']['output']>
  last_page?: Maybe<Scalars['String']['output']>
  location?: Maybe<Scalars['String']['output']>
  password?: Maybe<Scalars['Hash']['output']>
  policies?: Maybe<Array<Maybe<Directus_Access>>>
  policies_func?: Maybe<Count_Functions>
  provider?: Maybe<Scalars['String']['output']>
  role?: Maybe<Directus_Roles>
  status?: Maybe<Scalars['String']['output']>
  tags?: Maybe<Scalars['JSON']['output']>
  tags_func?: Maybe<Count_Functions>
  tfa_secret?: Maybe<Scalars['Hash']['output']>
  theme_dark?: Maybe<Scalars['String']['output']>
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>
  theme_dark_overrides_func?: Maybe<Count_Functions>
  theme_light?: Maybe<Scalars['String']['output']>
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>
  theme_light_overrides_func?: Maybe<Count_Functions>
  title?: Maybe<Scalars['String']['output']>
  token?: Maybe<Scalars['Hash']['output']>
}

export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_UsersPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>
  appearance?: InputMaybe<String_Filter_Operators>
  auth_data?: InputMaybe<String_Filter_Operators>
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>
  avatar?: InputMaybe<Directus_Files_Filter>
  description?: InputMaybe<String_Filter_Operators>
  email?: InputMaybe<String_Filter_Operators>
  email_notifications?: InputMaybe<Boolean_Filter_Operators>
  external_identifier?: InputMaybe<String_Filter_Operators>
  first_name?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  language?: InputMaybe<String_Filter_Operators>
  last_access?: InputMaybe<Date_Filter_Operators>
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>
  last_name?: InputMaybe<String_Filter_Operators>
  last_page?: InputMaybe<String_Filter_Operators>
  location?: InputMaybe<String_Filter_Operators>
  password?: InputMaybe<Hash_Filter_Operators>
  policies?: InputMaybe<Directus_Access_Filter>
  policies_func?: InputMaybe<Count_Function_Filter_Operators>
  provider?: InputMaybe<String_Filter_Operators>
  role?: InputMaybe<Directus_Roles_Filter>
  status?: InputMaybe<String_Filter_Operators>
  tags?: InputMaybe<String_Filter_Operators>
  tags_func?: InputMaybe<Count_Function_Filter_Operators>
  tfa_secret?: InputMaybe<Hash_Filter_Operators>
  theme_dark?: InputMaybe<String_Filter_Operators>
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>
  theme_light?: InputMaybe<String_Filter_Operators>
  theme_light_overrides?: InputMaybe<String_Filter_Operators>
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>
  title?: InputMaybe<String_Filter_Operators>
  token?: InputMaybe<Hash_Filter_Operators>
}

export type Directus_Users_Mutated = {
  __typename?: 'directus_users_mutated'
  data?: Maybe<Directus_Users>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Versions = {
  __typename?: 'directus_versions'
  collection: Scalars['String']['output']
  date_created?: Maybe<Scalars['Date']['output']>
  date_created_func?: Maybe<Datetime_Functions>
  date_updated?: Maybe<Scalars['Date']['output']>
  date_updated_func?: Maybe<Datetime_Functions>
  delta?: Maybe<Scalars['JSON']['output']>
  delta_func?: Maybe<Count_Functions>
  hash?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  item: Scalars['String']['output']
  key: Scalars['String']['output']
  name?: Maybe<Scalars['String']['output']>
  user_created?: Maybe<Directus_Users>
  user_updated?: Maybe<Directus_Users>
}

export type Directus_VersionsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_VersionsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Versions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>
  collection?: InputMaybe<String_Filter_Operators>
  date_created?: InputMaybe<Date_Filter_Operators>
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>
  date_updated?: InputMaybe<Date_Filter_Operators>
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>
  delta?: InputMaybe<String_Filter_Operators>
  delta_func?: InputMaybe<Count_Function_Filter_Operators>
  hash?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  item?: InputMaybe<String_Filter_Operators>
  key?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  user_created?: InputMaybe<Directus_Users_Filter>
  user_updated?: InputMaybe<Directus_Users_Filter>
}

export type Directus_Versions_Mutated = {
  __typename?: 'directus_versions_mutated'
  data?: Maybe<Directus_Versions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Directus_Webhooks = {
  __typename?: 'directus_webhooks'
  actions: Array<Maybe<Scalars['String']['output']>>
  collections: Array<Maybe<Scalars['String']['output']>>
  data?: Maybe<Scalars['Boolean']['output']>
  headers?: Maybe<Scalars['JSON']['output']>
  headers_func?: Maybe<Count_Functions>
  id: Scalars['ID']['output']
  method?: Maybe<Scalars['String']['output']>
  migrated_flow?: Maybe<Directus_Flows>
  name: Scalars['String']['output']
  status?: Maybe<Scalars['String']['output']>
  url: Scalars['String']['output']
  was_active_before_deprecation: Scalars['Boolean']['output']
}

export type Directus_WebhooksMigrated_FlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Directus_Webhooks_Mutated = {
  __typename?: 'directus_webhooks_mutated'
  data?: Maybe<Directus_Webhooks>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Folders = {
  __typename?: 'folders'
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
  parent?: Maybe<Folders>
}

export type FoldersParentArgs = {
  filter?: InputMaybe<Folders_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Folders_Aggregated = {
  __typename?: 'folders_aggregated'
  count?: Maybe<Folders_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Folders_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Folders_Aggregated_Count = {
  __typename?: 'folders_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  parent?: Maybe<Scalars['Int']['output']>
}

export type Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Folders_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Folders_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  parent?: InputMaybe<Folders_Filter>
}

export type Folders_Mutated = {
  __typename?: 'folders_mutated'
  data?: Maybe<Folders>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>
  _nempty?: InputMaybe<Scalars['Boolean']['input']>
  _nnull?: InputMaybe<Scalars['Boolean']['input']>
  _null?: InputMaybe<Scalars['Boolean']['input']>
}

export type Institutions = {
  __typename?: 'institutions'
  acronym?: Maybe<Scalars['String']['output']>
  commercial_name?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<Scalars['String']['output']>
  intro?: Maybe<Scalars['String']['output']>
  official_data_source?: Maybe<Scalars['String']['output']>
  ownership?: Maybe<Scalars['String']['output']>
  rank_and_rec?: Maybe<Scalars['JSON']['output']>
  rank_and_rec_func?: Maybe<Count_Functions>
  standsfor?: Maybe<Scalars['JSON']['output']>
  standsfor_func?: Maybe<Count_Functions>
  top_masters?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  videos?: Maybe<Scalars['String']['output']>
}

export type Institutions_Aggregated = {
  __typename?: 'institutions_aggregated'
  count?: Maybe<Institutions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Institutions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Institutions_Aggregated_Count = {
  __typename?: 'institutions_aggregated_count'
  acronym?: Maybe<Scalars['Int']['output']>
  commercial_name?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  images?: Maybe<Scalars['Int']['output']>
  intro?: Maybe<Scalars['Int']['output']>
  official_data_source?: Maybe<Scalars['Int']['output']>
  ownership?: Maybe<Scalars['Int']['output']>
  rank_and_rec?: Maybe<Scalars['Int']['output']>
  standsfor?: Maybe<Scalars['Int']['output']>
  top_masters?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['Int']['output']>
  videos?: Maybe<Scalars['Int']['output']>
}

export type Institutions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Institutions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Institutions_Filter>>>
  acronym?: InputMaybe<String_Filter_Operators>
  commercial_name?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  images?: InputMaybe<String_Filter_Operators>
  intro?: InputMaybe<String_Filter_Operators>
  official_data_source?: InputMaybe<String_Filter_Operators>
  ownership?: InputMaybe<String_Filter_Operators>
  rank_and_rec?: InputMaybe<String_Filter_Operators>
  rank_and_rec_func?: InputMaybe<Count_Function_Filter_Operators>
  standsfor?: InputMaybe<String_Filter_Operators>
  standsfor_func?: InputMaybe<Count_Function_Filter_Operators>
  top_masters?: InputMaybe<String_Filter_Operators>
  type?: InputMaybe<String_Filter_Operators>
  url?: InputMaybe<String_Filter_Operators>
  videos?: InputMaybe<String_Filter_Operators>
}

export type Institutions_Mutated = {
  __typename?: 'institutions_mutated'
  data?: Maybe<Institutions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Institutions_Scholarships_Courses = {
  __typename?: 'institutions_scholarships_courses'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  institutions_id?: Maybe<Institutions>
  scholarships_id?: Maybe<Scholarships>
}

export type Institutions_Scholarships_CoursesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_Scholarships_CoursesInstitutions_IdArgs = {
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_Scholarships_CoursesScholarships_IdArgs = {
  filter?: InputMaybe<Scholarships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_Scholarships_Courses_Aggregated = {
  __typename?: 'institutions_scholarships_courses_aggregated'
  count?: Maybe<Institutions_Scholarships_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Institutions_Scholarships_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Institutions_Scholarships_Courses_Aggregated_Count = {
  __typename?: 'institutions_scholarships_courses_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  institutions_id?: Maybe<Scalars['Int']['output']>
  scholarships_id?: Maybe<Scalars['Int']['output']>
}

export type Institutions_Scholarships_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Institutions_Scholarships_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Institutions_Scholarships_Courses_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<String_Filter_Operators>
  institutions_id?: InputMaybe<Institutions_Filter>
  scholarships_id?: InputMaybe<Scholarships_Filter>
}

export type Institutions_Scholarships_Courses_Mutated = {
  __typename?: 'institutions_scholarships_courses_mutated'
  data?: Maybe<Institutions_Scholarships_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Institutions_Tag_Institutions = {
  __typename?: 'institutions_tag_institutions'
  id: Scalars['ID']['output']
  institutions_id?: Maybe<Institutions>
  tag_institutions_id?: Maybe<Tag_Institutions>
}

export type Institutions_Tag_InstitutionsInstitutions_IdArgs = {
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_Tag_InstitutionsTag_Institutions_IdArgs = {
  filter?: InputMaybe<Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_Tag_Institutions_Aggregated = {
  __typename?: 'institutions_tag_institutions_aggregated'
  avg?: Maybe<Institutions_Tag_Institutions_Aggregated_Fields>
  avgDistinct?: Maybe<Institutions_Tag_Institutions_Aggregated_Fields>
  count?: Maybe<Institutions_Tag_Institutions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Institutions_Tag_Institutions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Institutions_Tag_Institutions_Aggregated_Fields>
  min?: Maybe<Institutions_Tag_Institutions_Aggregated_Fields>
  sum?: Maybe<Institutions_Tag_Institutions_Aggregated_Fields>
  sumDistinct?: Maybe<Institutions_Tag_Institutions_Aggregated_Fields>
}

export type Institutions_Tag_Institutions_Aggregated_Count = {
  __typename?: 'institutions_tag_institutions_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  institutions_id?: Maybe<Scalars['Int']['output']>
  tag_institutions_id?: Maybe<Scalars['Int']['output']>
}

export type Institutions_Tag_Institutions_Aggregated_Fields = {
  __typename?: 'institutions_tag_institutions_aggregated_fields'
  tag_institutions_id?: Maybe<Scalars['Float']['output']>
}

export type Institutions_Tag_Institutions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Institutions_Tag_Institutions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Institutions_Tag_Institutions_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  institutions_id?: InputMaybe<Institutions_Filter>
  tag_institutions_id?: InputMaybe<Tag_Institutions_Filter>
}

export type Institutions_Tag_Institutions_Mutated = {
  __typename?: 'institutions_tag_institutions_mutated'
  data?: Maybe<Institutions_Tag_Institutions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Languages = {
  __typename?: 'languages'
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated'
  count?: Maybe<Languages_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Languages_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Languages_Mutated = {
  __typename?: 'languages_mutated'
  data?: Maybe<Languages>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Menu_Items = {
  __typename?: 'menu_items'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_active?: Maybe<Scalars['Boolean']['output']>
  menu_item_id?: Maybe<Menu_Items>
  menu_item_relationship_id: Scalars['String']['output']
  menu_order?: Maybe<Scalars['Int']['output']>
  menus_id?: Maybe<Menus>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type Menu_ItemsMenu_Item_IdArgs = {
  filter?: InputMaybe<Menu_Items_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Menu_ItemsMenus_IdArgs = {
  filter?: InputMaybe<Menus_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Menu_Items_Aggregated = {
  __typename?: 'menu_items_aggregated'
  avg?: Maybe<Menu_Items_Aggregated_Fields>
  avgDistinct?: Maybe<Menu_Items_Aggregated_Fields>
  count?: Maybe<Menu_Items_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Menu_Items_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Menu_Items_Aggregated_Fields>
  min?: Maybe<Menu_Items_Aggregated_Fields>
  sum?: Maybe<Menu_Items_Aggregated_Fields>
  sumDistinct?: Maybe<Menu_Items_Aggregated_Fields>
}

export type Menu_Items_Aggregated_Count = {
  __typename?: 'menu_items_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  is_active?: Maybe<Scalars['Int']['output']>
  menu_item_id?: Maybe<Scalars['Int']['output']>
  menu_item_relationship_id?: Maybe<Scalars['Int']['output']>
  menu_order?: Maybe<Scalars['Int']['output']>
  menus_id?: Maybe<Scalars['Int']['output']>
  slug?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['Int']['output']>
}

export type Menu_Items_Aggregated_Fields = {
  __typename?: 'menu_items_aggregated_fields'
  menu_order?: Maybe<Scalars['Float']['output']>
}

export type Menu_Items_Courses = {
  __typename?: 'menu_items_courses'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  menu_items_id?: Maybe<Menu_Items>
}

export type Menu_Items_CoursesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Menu_Items_CoursesMenu_Items_IdArgs = {
  filter?: InputMaybe<Menu_Items_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Menu_Items_Courses_Aggregated = {
  __typename?: 'menu_items_courses_aggregated'
  count?: Maybe<Menu_Items_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Menu_Items_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Menu_Items_Courses_Aggregated_Count = {
  __typename?: 'menu_items_courses_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  menu_items_id?: Maybe<Scalars['Int']['output']>
}

export type Menu_Items_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menu_Items_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Menu_Items_Courses_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<String_Filter_Operators>
  menu_items_id?: InputMaybe<Menu_Items_Filter>
}

export type Menu_Items_Courses_Mutated = {
  __typename?: 'menu_items_courses_mutated'
  data?: Maybe<Menu_Items_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Menu_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menu_Items_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Menu_Items_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  is_active?: InputMaybe<Boolean_Filter_Operators>
  menu_item_id?: InputMaybe<Menu_Items_Filter>
  menu_item_relationship_id?: InputMaybe<String_Filter_Operators>
  menu_order?: InputMaybe<Number_Filter_Operators>
  menus_id?: InputMaybe<Menus_Filter>
  slug?: InputMaybe<String_Filter_Operators>
  title?: InputMaybe<String_Filter_Operators>
}

export type Menu_Items_Mutated = {
  __typename?: 'menu_items_mutated'
  data?: Maybe<Menu_Items>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Menu_Items_Pages = {
  __typename?: 'menu_items_pages'
  id: Scalars['ID']['output']
  menu_items_id?: Maybe<Menu_Items>
  pages_id?: Maybe<Pages>
}

export type Menu_Items_PagesMenu_Items_IdArgs = {
  filter?: InputMaybe<Menu_Items_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Menu_Items_PagesPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Menu_Items_Pages_Aggregated = {
  __typename?: 'menu_items_pages_aggregated'
  count?: Maybe<Menu_Items_Pages_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Menu_Items_Pages_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Menu_Items_Pages_Aggregated_Count = {
  __typename?: 'menu_items_pages_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  menu_items_id?: Maybe<Scalars['Int']['output']>
  pages_id?: Maybe<Scalars['Int']['output']>
}

export type Menu_Items_Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menu_Items_Pages_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Menu_Items_Pages_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  menu_items_id?: InputMaybe<Menu_Items_Filter>
  pages_id?: InputMaybe<Pages_Filter>
}

export type Menu_Items_Pages_Mutated = {
  __typename?: 'menu_items_pages_mutated'
  data?: Maybe<Menu_Items_Pages>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Menus = {
  __typename?: 'menus'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type Menus_Aggregated = {
  __typename?: 'menus_aggregated'
  count?: Maybe<Menus_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Menus_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Menus_Aggregated_Count = {
  __typename?: 'menus_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Menus_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menus_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Menus_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Menus_Mutated = {
  __typename?: 'menus_mutated'
  data?: Maybe<Menus>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>
  _nnull?: InputMaybe<Scalars['Boolean']['input']>
  _null?: InputMaybe<Scalars['Boolean']['input']>
}

export type Page_Blocks = {
  __typename?: 'page_blocks'
  blocks_id?: Maybe<Blocks>
  id: Scalars['ID']['output']
  pages_id?: Maybe<Pages>
}

export type Page_BlocksBlocks_IdArgs = {
  filter?: InputMaybe<Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_BlocksPages_IdArgs = {
  filter?: InputMaybe<Pages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_Blocks_Aggregated = {
  __typename?: 'page_blocks_aggregated'
  count?: Maybe<Page_Blocks_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Page_Blocks_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Page_Blocks_Aggregated_Count = {
  __typename?: 'page_blocks_aggregated_count'
  blocks_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  pages_id?: Maybe<Scalars['Int']['output']>
}

export type Page_Blocks_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Page_Blocks_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Page_Blocks_Filter>>>
  blocks_id?: InputMaybe<Blocks_Filter>
  id?: InputMaybe<String_Filter_Operators>
  pages_id?: InputMaybe<Pages_Filter>
}

export type Page_Blocks_Mutated = {
  __typename?: 'page_blocks_mutated'
  data?: Maybe<Page_Blocks>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Pages = {
  __typename?: 'pages'
  content?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  seo_template_id: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type Pages_Aggregated = {
  __typename?: 'pages_aggregated'
  count?: Maybe<Pages_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Pages_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Pages_Aggregated_Count = {
  __typename?: 'pages_aggregated_count'
  content?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  seo_template_id?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['Int']['output']>
}

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>
  content?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  seo_template_id?: InputMaybe<String_Filter_Operators>
  title?: InputMaybe<String_Filter_Operators>
  url?: InputMaybe<String_Filter_Operators>
}

export type Pages_Mutated = {
  __typename?: 'pages_mutated'
  data?: Maybe<Pages>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Posts = {
  __typename?: 'posts'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  seo_template_id?: Maybe<Seo_Template>
  title?: Maybe<Scalars['String']['output']>
}

export type PostsSeo_Template_IdArgs = {
  filter?: InputMaybe<Seo_Template_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Posts_Aggregated = {
  __typename?: 'posts_aggregated'
  count?: Maybe<Posts_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Posts_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Posts_Aggregated_Count = {
  __typename?: 'posts_aggregated_count'
  content?: Maybe<Scalars['Int']['output']>
  excerpt?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  seo_template_id?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['Int']['output']>
}

export type Posts_Category_Posts = {
  __typename?: 'posts_category_posts'
  category_posts_id?: Maybe<Category_Posts>
  id: Scalars['ID']['output']
  posts_id?: Maybe<Posts>
}

export type Posts_Category_PostsCategory_Posts_IdArgs = {
  filter?: InputMaybe<Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Posts_Category_PostsPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Posts_Category_Posts_Aggregated = {
  __typename?: 'posts_category_posts_aggregated'
  avg?: Maybe<Posts_Category_Posts_Aggregated_Fields>
  avgDistinct?: Maybe<Posts_Category_Posts_Aggregated_Fields>
  count?: Maybe<Posts_Category_Posts_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Posts_Category_Posts_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Posts_Category_Posts_Aggregated_Fields>
  min?: Maybe<Posts_Category_Posts_Aggregated_Fields>
  sum?: Maybe<Posts_Category_Posts_Aggregated_Fields>
  sumDistinct?: Maybe<Posts_Category_Posts_Aggregated_Fields>
}

export type Posts_Category_Posts_Aggregated_Count = {
  __typename?: 'posts_category_posts_aggregated_count'
  category_posts_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  posts_id?: Maybe<Scalars['Int']['output']>
}

export type Posts_Category_Posts_Aggregated_Fields = {
  __typename?: 'posts_category_posts_aggregated_fields'
  category_posts_id?: Maybe<Scalars['Float']['output']>
}

export type Posts_Category_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Category_Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Posts_Category_Posts_Filter>>>
  category_posts_id?: InputMaybe<Category_Posts_Filter>
  id?: InputMaybe<String_Filter_Operators>
  posts_id?: InputMaybe<Posts_Filter>
}

export type Posts_Category_Posts_Mutated = {
  __typename?: 'posts_category_posts_mutated'
  data?: Maybe<Posts_Category_Posts>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Posts_Filter>>>
  content?: InputMaybe<String_Filter_Operators>
  excerpt?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  seo_template_id?: InputMaybe<Seo_Template_Filter>
  title?: InputMaybe<String_Filter_Operators>
}

export type Posts_Mutated = {
  __typename?: 'posts_mutated'
  data?: Maybe<Posts>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Posts_Tag_Posts = {
  __typename?: 'posts_tag_posts'
  id: Scalars['ID']['output']
  posts_id?: Maybe<Posts>
  tag_posts_id?: Maybe<Tag_Posts>
}

export type Posts_Tag_PostsPosts_IdArgs = {
  filter?: InputMaybe<Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Posts_Tag_PostsTag_Posts_IdArgs = {
  filter?: InputMaybe<Tag_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Posts_Tag_Posts_Aggregated = {
  __typename?: 'posts_tag_posts_aggregated'
  avg?: Maybe<Posts_Tag_Posts_Aggregated_Fields>
  avgDistinct?: Maybe<Posts_Tag_Posts_Aggregated_Fields>
  count?: Maybe<Posts_Tag_Posts_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Posts_Tag_Posts_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Posts_Tag_Posts_Aggregated_Fields>
  min?: Maybe<Posts_Tag_Posts_Aggregated_Fields>
  sum?: Maybe<Posts_Tag_Posts_Aggregated_Fields>
  sumDistinct?: Maybe<Posts_Tag_Posts_Aggregated_Fields>
}

export type Posts_Tag_Posts_Aggregated_Count = {
  __typename?: 'posts_tag_posts_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  posts_id?: Maybe<Scalars['Int']['output']>
  tag_posts_id?: Maybe<Scalars['Int']['output']>
}

export type Posts_Tag_Posts_Aggregated_Fields = {
  __typename?: 'posts_tag_posts_aggregated_fields'
  tag_posts_id?: Maybe<Scalars['Float']['output']>
}

export type Posts_Tag_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Tag_Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Posts_Tag_Posts_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  posts_id?: InputMaybe<Posts_Filter>
  tag_posts_id?: InputMaybe<Tag_Posts_Filter>
}

export type Posts_Tag_Posts_Mutated = {
  __typename?: 'posts_tag_posts_mutated'
  data?: Maybe<Posts_Tag_Posts>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Profiles = {
  __typename?: 'profiles'
  content_title?: Maybe<Scalars['String']['output']>
  courses_id?: Maybe<Courses>
  data?: Maybe<Scalars['JSON']['output']>
  data_func?: Maybe<Count_Functions>
  id: Scalars['ID']['output']
  students?: Maybe<Scalars['JSON']['output']>
  students_func?: Maybe<Count_Functions>
  target?: Maybe<Scalars['JSON']['output']>
  target_func?: Maybe<Count_Functions>
}

export type ProfilesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Profiles_Aggregated = {
  __typename?: 'profiles_aggregated'
  count?: Maybe<Profiles_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Profiles_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Profiles_Aggregated_Count = {
  __typename?: 'profiles_aggregated_count'
  content_title?: Maybe<Scalars['Int']['output']>
  courses_id?: Maybe<Scalars['Int']['output']>
  data?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  students?: Maybe<Scalars['Int']['output']>
  target?: Maybe<Scalars['Int']['output']>
}

export type Profiles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Profiles_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Profiles_Filter>>>
  content_title?: InputMaybe<String_Filter_Operators>
  courses_id?: InputMaybe<Courses_Filter>
  data?: InputMaybe<String_Filter_Operators>
  data_func?: InputMaybe<Count_Function_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  students?: InputMaybe<String_Filter_Operators>
  students_func?: InputMaybe<Count_Function_Filter_Operators>
  target?: InputMaybe<String_Filter_Operators>
  target_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Profiles_Mutated = {
  __typename?: 'profiles_mutated'
  data?: Maybe<Profiles>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Questions = {
  __typename?: 'questions'
  close_question?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  languages_id?: Maybe<Languages>
  option_answer?: Maybe<Scalars['String']['output']>
  option_answers?: Maybe<Scalars['JSON']['output']>
  option_answers_func?: Maybe<Count_Functions>
  text?: Maybe<Scalars['String']['output']>
}

export type QuestionsLanguages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Questions_Aggregated = {
  __typename?: 'questions_aggregated'
  count?: Maybe<Questions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Questions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Questions_Aggregated_Count = {
  __typename?: 'questions_aggregated_count'
  close_question?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  languages_id?: Maybe<Scalars['Int']['output']>
  option_answer?: Maybe<Scalars['Int']['output']>
  option_answers?: Maybe<Scalars['Int']['output']>
  text?: Maybe<Scalars['Int']['output']>
}

export type Questions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Questions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Questions_Filter>>>
  close_question?: InputMaybe<Boolean_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  languages_id?: InputMaybe<Languages_Filter>
  option_answer?: InputMaybe<String_Filter_Operators>
  option_answers?: InputMaybe<String_Filter_Operators>
  option_answers_func?: InputMaybe<Count_Function_Filter_Operators>
  text?: InputMaybe<String_Filter_Operators>
}

export type Questions_Mutated = {
  __typename?: 'questions_mutated'
  data?: Maybe<Questions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Reports = {
  __typename?: 'reports'
  courses_id?: Maybe<Courses>
  data?: Maybe<Scalars['JSON']['output']>
  data_func?: Maybe<Count_Functions>
  date?: Maybe<Scalars['Date']['output']>
  date_func?: Maybe<Datetime_Functions>
  id: Scalars['ID']['output']
  institutions_id?: Maybe<Institutions>
  internal_code?: Maybe<Scalars['String']['output']>
  is_validated?: Maybe<Scalars['Boolean']['output']>
  o_languages_id?: Maybe<Languages>
  users_id?: Maybe<Users>
}

export type ReportsCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ReportsInstitutions_IdArgs = {
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ReportsO_Languages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ReportsUsers_IdArgs = {
  filter?: InputMaybe<Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Reports_Aggregated = {
  __typename?: 'reports_aggregated'
  count?: Maybe<Reports_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Reports_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Reports_Aggregated_Count = {
  __typename?: 'reports_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  data?: Maybe<Scalars['Int']['output']>
  date?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  institutions_id?: Maybe<Scalars['Int']['output']>
  internal_code?: Maybe<Scalars['Int']['output']>
  is_validated?: Maybe<Scalars['Int']['output']>
  o_languages_id?: Maybe<Scalars['Int']['output']>
  users_id?: Maybe<Scalars['Int']['output']>
}

export type Reports_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Reports_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Reports_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  data?: InputMaybe<String_Filter_Operators>
  data_func?: InputMaybe<Count_Function_Filter_Operators>
  date?: InputMaybe<Date_Filter_Operators>
  date_func?: InputMaybe<Datetime_Function_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  institutions_id?: InputMaybe<Institutions_Filter>
  internal_code?: InputMaybe<String_Filter_Operators>
  is_validated?: InputMaybe<Boolean_Filter_Operators>
  o_languages_id?: InputMaybe<Languages_Filter>
  users_id?: InputMaybe<Users_Filter>
}

export type Reports_Mutated = {
  __typename?: 'reports_mutated'
  data?: Maybe<Reports>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Reports_Questions = {
  __typename?: 'reports_questions'
  id: Scalars['ID']['output']
  questions_id?: Maybe<Questions>
  reports_id?: Maybe<Reports>
}

export type Reports_QuestionsQuestions_IdArgs = {
  filter?: InputMaybe<Questions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Reports_QuestionsReports_IdArgs = {
  filter?: InputMaybe<Reports_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Reports_Questions_Aggregated = {
  __typename?: 'reports_questions_aggregated'
  count?: Maybe<Reports_Questions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Reports_Questions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Reports_Questions_Aggregated_Count = {
  __typename?: 'reports_questions_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  questions_id?: Maybe<Scalars['Int']['output']>
  reports_id?: Maybe<Scalars['Int']['output']>
}

export type Reports_Questions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Reports_Questions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Reports_Questions_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  questions_id?: InputMaybe<Questions_Filter>
  reports_id?: InputMaybe<Reports_Filter>
}

export type Reports_Questions_Mutated = {
  __typename?: 'reports_questions_mutated'
  data?: Maybe<Reports_Questions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Scholarships = {
  __typename?: 'scholarships'
  academic_course?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_active?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  o_languages_id?: Maybe<Languages>
  type?: Maybe<Scalars['String']['output']>
}

export type ScholarshipsO_Languages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Scholarships_Aggregated = {
  __typename?: 'scholarships_aggregated'
  count?: Maybe<Scholarships_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Scholarships_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Scholarships_Aggregated_Count = {
  __typename?: 'scholarships_aggregated_count'
  academic_course?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  is_active?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  o_languages_id?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
}

export type Scholarships_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Scholarships_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Scholarships_Filter>>>
  academic_course?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  is_active?: InputMaybe<Boolean_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  o_languages_id?: InputMaybe<Languages_Filter>
  type?: InputMaybe<String_Filter_Operators>
}

export type Scholarships_Mutated = {
  __typename?: 'scholarships_mutated'
  data?: Maybe<Scholarships>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Seo_Template = {
  __typename?: 'seo_template'
  directus_files_id: Scalars['String']['output']
  id: Scalars['ID']['output']
  meta_description?: Maybe<Scalars['String']['output']>
  meta_title?: Maybe<Scalars['String']['output']>
}

export type Seo_Template_Aggregated = {
  __typename?: 'seo_template_aggregated'
  count?: Maybe<Seo_Template_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Seo_Template_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Seo_Template_Aggregated_Count = {
  __typename?: 'seo_template_aggregated_count'
  directus_files_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  meta_description?: Maybe<Scalars['Int']['output']>
  meta_title?: Maybe<Scalars['Int']['output']>
}

export type Seo_Template_Block = {
  __typename?: 'seo_template_block'
  blocks_id?: Maybe<Blocks>
  id: Scalars['ID']['output']
  seo_template_id?: Maybe<Seo_Template>
}

export type Seo_Template_BlockBlocks_IdArgs = {
  filter?: InputMaybe<Blocks_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Seo_Template_BlockSeo_Template_IdArgs = {
  filter?: InputMaybe<Seo_Template_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Seo_Template_Block_Aggregated = {
  __typename?: 'seo_template_block_aggregated'
  count?: Maybe<Seo_Template_Block_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Seo_Template_Block_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Seo_Template_Block_Aggregated_Count = {
  __typename?: 'seo_template_block_aggregated_count'
  blocks_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  seo_template_id?: Maybe<Scalars['Int']['output']>
}

export type Seo_Template_Block_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seo_Template_Block_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Seo_Template_Block_Filter>>>
  blocks_id?: InputMaybe<Blocks_Filter>
  id?: InputMaybe<String_Filter_Operators>
  seo_template_id?: InputMaybe<Seo_Template_Filter>
}

export type Seo_Template_Block_Mutated = {
  __typename?: 'seo_template_block_mutated'
  data?: Maybe<Seo_Template_Block>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Seo_Template_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seo_Template_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Seo_Template_Filter>>>
  directus_files_id?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  meta_description?: InputMaybe<String_Filter_Operators>
  meta_title?: InputMaybe<String_Filter_Operators>
}

export type Seo_Template_Mutated = {
  __typename?: 'seo_template_mutated'
  data?: Maybe<Seo_Template>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Settings = {
  __typename?: 'settings'
  constrained?: Maybe<Scalars['Boolean']['output']>
  data_type?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
}

export type Settings_Aggregated = {
  __typename?: 'settings_aggregated'
  count?: Maybe<Settings_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Settings_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Settings_Aggregated_Count = {
  __typename?: 'settings_aggregated_count'
  constrained?: Maybe<Scalars['Int']['output']>
  data_type?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Settings_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Settings_Filter>>>
  constrained?: InputMaybe<Boolean_Filter_Operators>
  data_type?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
}

export type Settings_Mutated = {
  __typename?: 'settings_mutated'
  data?: Maybe<Settings>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>
  _empty?: InputMaybe<Scalars['Boolean']['input']>
  _ends_with?: InputMaybe<Scalars['String']['input']>
  _eq?: InputMaybe<Scalars['String']['input']>
  _icontains?: InputMaybe<Scalars['String']['input']>
  _iends_with?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  _istarts_with?: InputMaybe<Scalars['String']['input']>
  _ncontains?: InputMaybe<Scalars['String']['input']>
  _nempty?: InputMaybe<Scalars['Boolean']['input']>
  _nends_with?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  _niends_with?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  _nistarts_with?: InputMaybe<Scalars['String']['input']>
  _nnull?: InputMaybe<Scalars['Boolean']['input']>
  _nstarts_with?: InputMaybe<Scalars['String']['input']>
  _null?: InputMaybe<Scalars['Boolean']['input']>
  _starts_with?: InputMaybe<Scalars['String']['input']>
}

export type Tag_Courses = {
  __typename?: 'tag_courses'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  seo_template_id?: Maybe<Seo_Template>
  tag_courses_id?: Maybe<Tag_Courses>
}

export type Tag_CoursesSeo_Template_IdArgs = {
  filter?: InputMaybe<Seo_Template_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Tag_CoursesTag_Courses_IdArgs = {
  filter?: InputMaybe<Tag_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Tag_Courses_Aggregated = {
  __typename?: 'tag_courses_aggregated'
  count?: Maybe<Tag_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Tag_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Tag_Courses_Aggregated_Count = {
  __typename?: 'tag_courses_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  seo_template_id?: Maybe<Scalars['Int']['output']>
  tag_courses_id?: Maybe<Scalars['Int']['output']>
}

export type Tag_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Tag_Courses_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
  seo_template_id?: InputMaybe<Seo_Template_Filter>
  tag_courses_id?: InputMaybe<Tag_Courses_Filter>
}

export type Tag_Courses_Mutated = {
  __typename?: 'tag_courses_mutated'
  data?: Maybe<Tag_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Tag_Institutions = {
  __typename?: 'tag_institutions'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type Tag_Institutions_Aggregated = {
  __typename?: 'tag_institutions_aggregated'
  avg?: Maybe<Tag_Institutions_Aggregated_Fields>
  avgDistinct?: Maybe<Tag_Institutions_Aggregated_Fields>
  count?: Maybe<Tag_Institutions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Tag_Institutions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Tag_Institutions_Aggregated_Fields>
  min?: Maybe<Tag_Institutions_Aggregated_Fields>
  sum?: Maybe<Tag_Institutions_Aggregated_Fields>
  sumDistinct?: Maybe<Tag_Institutions_Aggregated_Fields>
}

export type Tag_Institutions_Aggregated_Count = {
  __typename?: 'tag_institutions_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Tag_Institutions_Aggregated_Fields = {
  __typename?: 'tag_institutions_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Tag_Institutions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Institutions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Tag_Institutions_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Tag_Institutions_Mutated = {
  __typename?: 'tag_institutions_mutated'
  data?: Maybe<Tag_Institutions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Tag_Posts = {
  __typename?: 'tag_posts'
  category_posts_id?: Maybe<Category_Posts>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type Tag_PostsCategory_Posts_IdArgs = {
  filter?: InputMaybe<Category_Posts_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Tag_Posts_Aggregated = {
  __typename?: 'tag_posts_aggregated'
  avg?: Maybe<Tag_Posts_Aggregated_Fields>
  avgDistinct?: Maybe<Tag_Posts_Aggregated_Fields>
  count?: Maybe<Tag_Posts_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Tag_Posts_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Tag_Posts_Aggregated_Fields>
  min?: Maybe<Tag_Posts_Aggregated_Fields>
  sum?: Maybe<Tag_Posts_Aggregated_Fields>
  sumDistinct?: Maybe<Tag_Posts_Aggregated_Fields>
}

export type Tag_Posts_Aggregated_Count = {
  __typename?: 'tag_posts_aggregated_count'
  category_posts_id?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Tag_Posts_Aggregated_Fields = {
  __typename?: 'tag_posts_aggregated_fields'
  category_posts_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type Tag_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Tag_Posts_Filter>>>
  category_posts_id?: InputMaybe<Category_Posts_Filter>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Tag_Posts_Mutated = {
  __typename?: 'tag_posts_mutated'
  data?: Maybe<Tag_Posts>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Test = {
  __typename?: 'test'
  id: Scalars['ID']['output']
  sort?: Maybe<Scalars['Int']['output']>
  status?: Maybe<Scalars['String']['output']>
  user_created?: Maybe<Directus_Users>
}

export type TestUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Test_Aggregated = {
  __typename?: 'test_aggregated'
  avg?: Maybe<Test_Aggregated_Fields>
  avgDistinct?: Maybe<Test_Aggregated_Fields>
  count?: Maybe<Test_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Test_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Test_Aggregated_Fields>
  min?: Maybe<Test_Aggregated_Fields>
  sum?: Maybe<Test_Aggregated_Fields>
  sumDistinct?: Maybe<Test_Aggregated_Fields>
}

export type Test_Aggregated_Count = {
  __typename?: 'test_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  sort?: Maybe<Scalars['Int']['output']>
  status?: Maybe<Scalars['Int']['output']>
  user_created?: Maybe<Scalars['Int']['output']>
}

export type Test_Aggregated_Fields = {
  __typename?: 'test_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  sort?: Maybe<Scalars['Float']['output']>
}

export type Test_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Test_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Test_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
  sort?: InputMaybe<Number_Filter_Operators>
  status?: InputMaybe<String_Filter_Operators>
  user_created?: InputMaybe<Directus_Users_Filter>
}

export type Test_Mutated = {
  __typename?: 'test_mutated'
  data?: Maybe<Test>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Update_Allowed_Setting_Value_Input = {
  caption?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  item_value?: InputMaybe<Scalars['String']['input']>
  settings_id?: InputMaybe<Update_Settings_Input>
}

export type Update_Bilinguals_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Blocks_Input = {
  blocks_id?: InputMaybe<Update_Blocks_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  schema?: InputMaybe<Scalars['JSON']['input']>
}

export type Update_Campuses_Courses_Input = {
  campuses_id?: InputMaybe<Update_Campuses_Input>
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Campuses_Input = {
  city?: InputMaybe<Scalars['String']['input']>
  country?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  institutions_id?: InputMaybe<Update_Institutions_Input>
  intro?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  street_address?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Update_Category_Courses_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  seo_template_id?: InputMaybe<Update_Seo_Template_Input>
  tag_courses_id?: InputMaybe<Update_Tag_Courses_Input>
}

export type Update_Category_Posts_Input = {
  category_posts_id?: InputMaybe<Update_Category_Posts_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Course_Languages_Input = {
  direction?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Courses_Category_Courses_Input = {
  category_courses_id?: InputMaybe<Update_Category_Courses_Input>
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Courses_Input = {
  application_date?: InputMaybe<Scalars['Date']['input']>
  bilinguals_id?: InputMaybe<Update_Bilinguals_Input>
  career_opportunities?: InputMaybe<Scalars['String']['input']>
  careers?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  course_intro?: InputMaybe<Scalars['String']['input']>
  degree_id?: InputMaybe<Scalars['Int']['input']>
  degree_type?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['String']['input']>
  ects?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  info_blocks?: InputMaybe<Scalars['JSON']['input']>
  is_dual?: InputMaybe<Scalars['Boolean']['input']>
  is_official?: InputMaybe<Scalars['Boolean']['input']>
  is_on_demand?: InputMaybe<Scalars['Boolean']['input']>
  languages_id?: InputMaybe<Update_Course_Languages_Input>
  learning_format?: InputMaybe<Scalars['String']['input']>
  learning_pace?: InputMaybe<Scalars['String']['input']>
  methology?: InputMaybe<Scalars['String']['input']>
  o_language?: InputMaybe<Update_Languages_Input>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  requirements?: InputMaybe<Scalars['String']['input']>
  schedules?: InputMaybe<Scalars['String']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
  start_date?: InputMaybe<Scalars['Date']['input']>
  structure?: InputMaybe<Scalars['JSON']['input']>
  translations?: InputMaybe<Array<InputMaybe<Update_Courses_Translations_Input>>>
  tuition_price?: InputMaybe<Scalars['JSON']['input']>
  tuition_price_comment?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  videos?: InputMaybe<Scalars['String']['input']>
}

export type Update_Courses_Tag_Courses_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  tag_courses_id?: InputMaybe<Update_Tag_Courses_Input>
}

export type Update_Courses_Translations_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  languages_id?: InputMaybe<Update_Languages_Input>
}

export type Update_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  policy?: InputMaybe<Update_Directus_Policies_Input>
  role?: InputMaybe<Update_Directus_Roles_Input>
  sort?: InputMaybe<Scalars['Int']['input']>
  user?: InputMaybe<Update_Directus_Users_Input>
}

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>
  created_on?: InputMaybe<Scalars['Date']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['Int']['input']>
  embed?: InputMaybe<Scalars['String']['input']>
  filename_disk?: InputMaybe<Scalars['String']['input']>
  filename_download?: InputMaybe<Scalars['String']['input']>
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>
  focal_point_x?: InputMaybe<Scalars['Int']['input']>
  focal_point_y?: InputMaybe<Scalars['Int']['input']>
  folder?: InputMaybe<Update_Directus_Folders_Input>
  height?: InputMaybe<Scalars['Int']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  metadata?: InputMaybe<Scalars['JSON']['input']>
  modified_by?: InputMaybe<Update_Directus_Users_Input>
  modified_on?: InputMaybe<Scalars['Date']['input']>
  storage?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Scalars['JSON']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  tus_data?: InputMaybe<Scalars['JSON']['input']>
  tus_id?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>
  uploaded_on?: InputMaybe<Scalars['Date']['input']>
  width?: InputMaybe<Scalars['Int']['input']>
}

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Update_Directus_Folders_Input>
}

export type Update_Directus_Permissions_Input = {
  action?: InputMaybe<Scalars['String']['input']>
  collection?: InputMaybe<Scalars['String']['input']>
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  permissions?: InputMaybe<Scalars['JSON']['input']>
  policy?: InputMaybe<Update_Directus_Policies_Input>
  presets?: InputMaybe<Scalars['JSON']['input']>
  validation?: InputMaybe<Scalars['JSON']['input']>
}

export type Update_Directus_Policies_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']['input']>
  app_access?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  permissions?: InputMaybe<Array<InputMaybe<Update_Directus_Permissions_Input>>>
  roles?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>
}

export type Update_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<Update_Directus_Roles_Input>>>
  description?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Update_Directus_Roles_Input>
  policies?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>
}

export type Update_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>
  auth_data?: InputMaybe<Scalars['JSON']['input']>
  avatar?: InputMaybe<Update_Directus_Files_Input>
  description?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>
  external_identifier?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  last_access?: InputMaybe<Scalars['Date']['input']>
  last_name?: InputMaybe<Scalars['String']['input']>
  last_page?: InputMaybe<Scalars['String']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['Hash']['input']>
  policies?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>
  provider?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Update_Directus_Roles_Input>
  status?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Scalars['JSON']['input']>
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>
  theme_dark?: InputMaybe<Scalars['String']['input']>
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>
  theme_light?: InputMaybe<Scalars['String']['input']>
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  token?: InputMaybe<Scalars['Hash']['input']>
}

export type Update_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Update_Folders_Input>
}

export type Update_Institutions_Input = {
  acronym?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  intro?: InputMaybe<Scalars['String']['input']>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  ownership?: InputMaybe<Scalars['String']['input']>
  rank_and_rec?: InputMaybe<Scalars['JSON']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
  top_masters?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  videos?: InputMaybe<Scalars['String']['input']>
}

export type Update_Institutions_Scholarships_Courses_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_id?: InputMaybe<Update_Institutions_Input>
  scholarships_id?: InputMaybe<Update_Scholarships_Input>
}

export type Update_Institutions_Tag_Institutions_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_id?: InputMaybe<Update_Institutions_Input>
  tag_institutions_id?: InputMaybe<Update_Tag_Institutions_Input>
}

export type Update_Languages_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Menu_Items_Courses_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  menu_items_id?: InputMaybe<Update_Menu_Items_Input>
}

export type Update_Menu_Items_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  menu_item_id?: InputMaybe<Update_Menu_Items_Input>
  menu_item_relationship_id?: InputMaybe<Scalars['String']['input']>
  menu_order?: InputMaybe<Scalars['Int']['input']>
  menus_id?: InputMaybe<Update_Menus_Input>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type Update_Menu_Items_Pages_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  menu_items_id?: InputMaybe<Update_Menu_Items_Input>
  pages_id?: InputMaybe<Update_Pages_Input>
}

export type Update_Menus_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Page_Blocks_Input = {
  blocks_id?: InputMaybe<Update_Blocks_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  pages_id?: InputMaybe<Update_Pages_Input>
}

export type Update_Pages_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  seo_template_id?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type Update_Posts_Category_Posts_Input = {
  category_posts_id?: InputMaybe<Update_Category_Posts_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  posts_id?: InputMaybe<Update_Posts_Input>
}

export type Update_Posts_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  excerpt?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  seo_template_id?: InputMaybe<Update_Seo_Template_Input>
  title?: InputMaybe<Scalars['String']['input']>
}

export type Update_Posts_Tag_Posts_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  posts_id?: InputMaybe<Update_Posts_Input>
  tag_posts_id?: InputMaybe<Update_Tag_Posts_Input>
}

export type Update_Profiles_Input = {
  content_title?: InputMaybe<Scalars['String']['input']>
  courses_id?: InputMaybe<Update_Courses_Input>
  data?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  students?: InputMaybe<Scalars['JSON']['input']>
  target?: InputMaybe<Scalars['JSON']['input']>
}

export type Update_Questions_Input = {
  close_question?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  languages_id?: InputMaybe<Update_Languages_Input>
  option_answer?: InputMaybe<Scalars['String']['input']>
  option_answers?: InputMaybe<Scalars['JSON']['input']>
  text?: InputMaybe<Scalars['String']['input']>
}

export type Update_Reports_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  data?: InputMaybe<Scalars['JSON']['input']>
  date?: InputMaybe<Scalars['Date']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_id?: InputMaybe<Update_Institutions_Input>
  internal_code?: InputMaybe<Scalars['String']['input']>
  is_validated?: InputMaybe<Scalars['Boolean']['input']>
  o_languages_id?: InputMaybe<Update_Languages_Input>
  users_id?: InputMaybe<Update_Users_Input>
}

export type Update_Reports_Questions_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  questions_id?: InputMaybe<Update_Questions_Input>
  reports_id?: InputMaybe<Update_Reports_Input>
}

export type Update_Scholarships_Input = {
  academic_course?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  o_languages_id?: InputMaybe<Update_Languages_Input>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Update_Seo_Template_Block_Input = {
  blocks_id?: InputMaybe<Update_Blocks_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  seo_template_id?: InputMaybe<Update_Seo_Template_Input>
}

export type Update_Seo_Template_Input = {
  directus_files_id?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  meta_description?: InputMaybe<Scalars['String']['input']>
  meta_title?: InputMaybe<Scalars['String']['input']>
}

export type Update_Settings_Input = {
  constrained?: InputMaybe<Scalars['Boolean']['input']>
  data_type?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Tag_Courses_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  seo_template_id?: InputMaybe<Update_Seo_Template_Input>
  tag_courses_id?: InputMaybe<Update_Tag_Courses_Input>
}

export type Update_Tag_Institutions_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Tag_Posts_Input = {
  category_posts_id?: InputMaybe<Update_Category_Posts_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Test_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  sort?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['String']['input']>
  user_created?: InputMaybe<Update_Directus_Users_Input>
}

export type Update_User_Setting_Input = {
  allowed_setting_value_id?: InputMaybe<Update_Allowed_Setting_Value_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  settings_id?: InputMaybe<Update_Settings_Input>
  unconstrained_value?: InputMaybe<Scalars['String']['input']>
  users_id?: InputMaybe<Update_Users_Input>
}

export type Update_Users_Input = {
  address?: InputMaybe<Scalars['String']['input']>
  birth_date?: InputMaybe<Scalars['Date']['input']>
  city?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  family_name?: InputMaybe<Scalars['String']['input']>
  family_name_2?: InputMaybe<Scalars['String']['input']>
  first_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  middle_name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Scalars['String']['input']>
}

export type User_Setting = {
  __typename?: 'user_setting'
  allowed_setting_value_id?: Maybe<Allowed_Setting_Value>
  id: Scalars['ID']['output']
  settings_id?: Maybe<Settings>
  unconstrained_value?: Maybe<Scalars['String']['output']>
  users_id?: Maybe<Users>
}

export type User_SettingAllowed_Setting_Value_IdArgs = {
  filter?: InputMaybe<Allowed_Setting_Value_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type User_SettingSettings_IdArgs = {
  filter?: InputMaybe<Settings_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type User_SettingUsers_IdArgs = {
  filter?: InputMaybe<Users_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type User_Setting_Aggregated = {
  __typename?: 'user_setting_aggregated'
  count?: Maybe<User_Setting_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<User_Setting_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type User_Setting_Aggregated_Count = {
  __typename?: 'user_setting_aggregated_count'
  allowed_setting_value_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  settings_id?: Maybe<Scalars['Int']['output']>
  unconstrained_value?: Maybe<Scalars['Int']['output']>
  users_id?: Maybe<Scalars['Int']['output']>
}

export type User_Setting_Filter = {
  _and?: InputMaybe<Array<InputMaybe<User_Setting_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<User_Setting_Filter>>>
  allowed_setting_value_id?: InputMaybe<Allowed_Setting_Value_Filter>
  id?: InputMaybe<String_Filter_Operators>
  settings_id?: InputMaybe<Settings_Filter>
  unconstrained_value?: InputMaybe<String_Filter_Operators>
  users_id?: InputMaybe<Users_Filter>
}

export type User_Setting_Mutated = {
  __typename?: 'user_setting_mutated'
  data?: Maybe<User_Setting>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Users = {
  __typename?: 'users'
  address?: Maybe<Scalars['String']['output']>
  birth_date?: Maybe<Scalars['Date']['output']>
  birth_date_func?: Maybe<Date_Functions>
  city?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  family_name?: Maybe<Scalars['String']['output']>
  family_name_2?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  middle_name?: Maybe<Scalars['String']['output']>
  password?: Maybe<Scalars['String']['output']>
  postal_code?: Maybe<Scalars['String']['output']>
  role?: Maybe<Scalars['String']['output']>
}

export type Users_Aggregated = {
  __typename?: 'users_aggregated'
  count?: Maybe<Users_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Users_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Users_Aggregated_Count = {
  __typename?: 'users_aggregated_count'
  address?: Maybe<Scalars['Int']['output']>
  birth_date?: Maybe<Scalars['Int']['output']>
  city?: Maybe<Scalars['Int']['output']>
  email?: Maybe<Scalars['Int']['output']>
  family_name?: Maybe<Scalars['Int']['output']>
  family_name_2?: Maybe<Scalars['Int']['output']>
  first_name?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  middle_name?: Maybe<Scalars['Int']['output']>
  password?: Maybe<Scalars['Int']['output']>
  postal_code?: Maybe<Scalars['Int']['output']>
  role?: Maybe<Scalars['Int']['output']>
}

export type Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Users_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Users_Filter>>>
  address?: InputMaybe<String_Filter_Operators>
  birth_date?: InputMaybe<Date_Filter_Operators>
  birth_date_func?: InputMaybe<Date_Function_Filter_Operators>
  city?: InputMaybe<String_Filter_Operators>
  email?: InputMaybe<String_Filter_Operators>
  family_name?: InputMaybe<String_Filter_Operators>
  family_name_2?: InputMaybe<String_Filter_Operators>
  first_name?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  middle_name?: InputMaybe<String_Filter_Operators>
  password?: InputMaybe<String_Filter_Operators>
  postal_code?: InputMaybe<String_Filter_Operators>
  role?: InputMaybe<String_Filter_Operators>
}

export type Users_Mutated = {
  __typename?: 'users_mutated'
  data?: Maybe<Users>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Version_Allowed_Setting_Value = {
  __typename?: 'version_allowed_setting_value'
  caption?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  item_value?: Maybe<Scalars['String']['output']>
  settings_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Bilinguals = {
  __typename?: 'version_bilinguals'
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Blocks = {
  __typename?: 'version_blocks'
  blocks_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  schema?: Maybe<Scalars['JSON']['output']>
}

export type Version_Campuses = {
  __typename?: 'version_campuses'
  city?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  images?: Maybe<Scalars['String']['output']>
  institutions_id?: Maybe<Scalars['JSON']['output']>
  intro?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
  phone?: Maybe<Scalars['String']['output']>
  postal_code?: Maybe<Scalars['String']['output']>
  street_address?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type Version_Campuses_Courses = {
  __typename?: 'version_campuses_courses'
  campuses_id?: Maybe<Scalars['JSON']['output']>
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Category_Courses = {
  __typename?: 'version_category_courses'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
  seo_template_id?: Maybe<Scalars['JSON']['output']>
  tag_courses_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Category_Posts = {
  __typename?: 'version_category_posts'
  category_posts_id?: Maybe<Scalars['JSON']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Course_Languages = {
  __typename?: 'version_course_languages'
  direction?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Courses = {
  __typename?: 'version_courses'
  application_date?: Maybe<Scalars['Date']['output']>
  bilinguals_id?: Maybe<Scalars['JSON']['output']>
  career_opportunities?: Maybe<Scalars['String']['output']>
  careers?: Maybe<Scalars['String']['output']>
  commercial_name?: Maybe<Scalars['String']['output']>
  course_intro?: Maybe<Scalars['String']['output']>
  degree_id?: Maybe<Scalars['Int']['output']>
  degree_type?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  ects?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['ID']['output']>
  images?: Maybe<Scalars['String']['output']>
  info_blocks?: Maybe<Scalars['JSON']['output']>
  is_dual?: Maybe<Scalars['Boolean']['output']>
  is_official?: Maybe<Scalars['Boolean']['output']>
  is_on_demand?: Maybe<Scalars['Boolean']['output']>
  languages_id?: Maybe<Scalars['JSON']['output']>
  learning_format?: Maybe<Scalars['String']['output']>
  learning_pace?: Maybe<Scalars['String']['output']>
  methology?: Maybe<Scalars['String']['output']>
  o_language?: Maybe<Scalars['JSON']['output']>
  official_data_source?: Maybe<Scalars['String']['output']>
  requirements?: Maybe<Scalars['String']['output']>
  schedules?: Maybe<Scalars['String']['output']>
  standsfor?: Maybe<Scalars['JSON']['output']>
  start_date?: Maybe<Scalars['Date']['output']>
  structure?: Maybe<Scalars['JSON']['output']>
  translations?: Maybe<Scalars['JSON']['output']>
  tuition_price?: Maybe<Scalars['JSON']['output']>
  tuition_price_comment?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  videos?: Maybe<Scalars['String']['output']>
}

export type Version_Courses_Category_Courses = {
  __typename?: 'version_courses_category_courses'
  category_courses_id?: Maybe<Scalars['JSON']['output']>
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Courses_Tag_Courses = {
  __typename?: 'version_courses_tag_courses'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  tag_courses_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Courses_Translations = {
  __typename?: 'version_courses_translations'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  languages_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Folders = {
  __typename?: 'version_folders'
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
  parent?: Maybe<Scalars['JSON']['output']>
}

export type Version_Institutions = {
  __typename?: 'version_institutions'
  acronym?: Maybe<Scalars['String']['output']>
  commercial_name?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  images?: Maybe<Scalars['String']['output']>
  intro?: Maybe<Scalars['String']['output']>
  official_data_source?: Maybe<Scalars['String']['output']>
  ownership?: Maybe<Scalars['String']['output']>
  rank_and_rec?: Maybe<Scalars['JSON']['output']>
  standsfor?: Maybe<Scalars['JSON']['output']>
  top_masters?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  videos?: Maybe<Scalars['String']['output']>
}

export type Version_Institutions_Scholarships_Courses = {
  __typename?: 'version_institutions_scholarships_courses'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  institutions_id?: Maybe<Scalars['JSON']['output']>
  scholarships_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Institutions_Tag_Institutions = {
  __typename?: 'version_institutions_tag_institutions'
  id?: Maybe<Scalars['ID']['output']>
  institutions_id?: Maybe<Scalars['JSON']['output']>
  tag_institutions_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Languages = {
  __typename?: 'version_languages'
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Menu_Items = {
  __typename?: 'version_menu_items'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  is_active?: Maybe<Scalars['Boolean']['output']>
  menu_item_id?: Maybe<Scalars['JSON']['output']>
  menu_item_relationship_id?: Maybe<Scalars['String']['output']>
  menu_order?: Maybe<Scalars['Int']['output']>
  menus_id?: Maybe<Scalars['JSON']['output']>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type Version_Menu_Items_Courses = {
  __typename?: 'version_menu_items_courses'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  menu_items_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Menu_Items_Pages = {
  __typename?: 'version_menu_items_pages'
  id?: Maybe<Scalars['ID']['output']>
  menu_items_id?: Maybe<Scalars['JSON']['output']>
  pages_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Menus = {
  __typename?: 'version_menus'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Page_Blocks = {
  __typename?: 'version_page_blocks'
  blocks_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  pages_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Pages = {
  __typename?: 'version_pages'
  content?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  seo_template_id?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type Version_Posts = {
  __typename?: 'version_posts'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  seo_template_id?: Maybe<Scalars['JSON']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type Version_Posts_Category_Posts = {
  __typename?: 'version_posts_category_posts'
  category_posts_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  posts_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Posts_Tag_Posts = {
  __typename?: 'version_posts_tag_posts'
  id?: Maybe<Scalars['ID']['output']>
  posts_id?: Maybe<Scalars['JSON']['output']>
  tag_posts_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Profiles = {
  __typename?: 'version_profiles'
  content_title?: Maybe<Scalars['String']['output']>
  courses_id?: Maybe<Scalars['JSON']['output']>
  data?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  students?: Maybe<Scalars['JSON']['output']>
  target?: Maybe<Scalars['JSON']['output']>
}

export type Version_Questions = {
  __typename?: 'version_questions'
  close_question?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['ID']['output']>
  languages_id?: Maybe<Scalars['JSON']['output']>
  option_answer?: Maybe<Scalars['String']['output']>
  option_answers?: Maybe<Scalars['JSON']['output']>
  text?: Maybe<Scalars['String']['output']>
}

export type Version_Reports = {
  __typename?: 'version_reports'
  courses_id?: Maybe<Scalars['JSON']['output']>
  data?: Maybe<Scalars['JSON']['output']>
  date?: Maybe<Scalars['Date']['output']>
  id?: Maybe<Scalars['ID']['output']>
  institutions_id?: Maybe<Scalars['JSON']['output']>
  internal_code?: Maybe<Scalars['String']['output']>
  is_validated?: Maybe<Scalars['Boolean']['output']>
  o_languages_id?: Maybe<Scalars['JSON']['output']>
  users_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Reports_Questions = {
  __typename?: 'version_reports_questions'
  id?: Maybe<Scalars['ID']['output']>
  questions_id?: Maybe<Scalars['JSON']['output']>
  reports_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Scholarships = {
  __typename?: 'version_scholarships'
  academic_course?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  is_active?: Maybe<Scalars['Boolean']['output']>
  name?: Maybe<Scalars['String']['output']>
  o_languages_id?: Maybe<Scalars['JSON']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type Version_Seo_Template = {
  __typename?: 'version_seo_template'
  directus_files_id?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  meta_description?: Maybe<Scalars['String']['output']>
  meta_title?: Maybe<Scalars['String']['output']>
}

export type Version_Seo_Template_Block = {
  __typename?: 'version_seo_template_block'
  blocks_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  seo_template_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Settings = {
  __typename?: 'version_settings'
  constrained?: Maybe<Scalars['Boolean']['output']>
  data_type?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Tag_Courses = {
  __typename?: 'version_tag_courses'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
  seo_template_id?: Maybe<Scalars['JSON']['output']>
  tag_courses_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Tag_Institutions = {
  __typename?: 'version_tag_institutions'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Tag_Posts = {
  __typename?: 'version_tag_posts'
  category_posts_id?: Maybe<Scalars['JSON']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Test = {
  __typename?: 'version_test'
  id?: Maybe<Scalars['ID']['output']>
  sort?: Maybe<Scalars['Int']['output']>
  status?: Maybe<Scalars['String']['output']>
  user_created?: Maybe<Scalars['JSON']['output']>
}

export type Version_User_Setting = {
  __typename?: 'version_user_setting'
  allowed_setting_value_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  settings_id?: Maybe<Scalars['JSON']['output']>
  unconstrained_value?: Maybe<Scalars['String']['output']>
  users_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Users = {
  __typename?: 'version_users'
  address?: Maybe<Scalars['String']['output']>
  birth_date?: Maybe<Scalars['Date']['output']>
  city?: Maybe<Scalars['String']['output']>
  email?: Maybe<Scalars['String']['output']>
  family_name?: Maybe<Scalars['String']['output']>
  family_name_2?: Maybe<Scalars['String']['output']>
  first_name?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  middle_name?: Maybe<Scalars['String']['output']>
  password?: Maybe<Scalars['String']['output']>
  postal_code?: Maybe<Scalars['String']['output']>
  role?: Maybe<Scalars['String']['output']>
}

export type GetCoursesLanguagesQueryVariables = Exact<{
  filter?: InputMaybe<Course_Languages_Filter>
}>

export type GetCoursesLanguagesQuery = {
  __typename?: 'Query'
  course_languages: Array<{ __typename?: 'course_languages'; id: string; name?: string | null; direction?: string | null }>
}

export type GetCoursesQueryVariables = Exact<{
  filter?: InputMaybe<Courses_Filter>
}>

export type GetCoursesQuery = {
  __typename?: 'Query'
  courses: Array<{
    __typename?: 'courses'
    id: string
    type: string
    commercial_name?: string | null
    is_official?: boolean | null
    duration?: string | null
    is_dual?: boolean | null
    ects?: number | null
    degree_type?: string | null
    degree_id?: number | null
    course_intro?: string | null
    description?: string | null
    methology?: string | null
    structure?: any | null
    standsfor?: any | null
    info_blocks?: any | null
    url?: string | null
    schedules?: string | null
    start_date?: any | null
    is_on_demand?: boolean | null
    application_date?: any | null
    requirements?: string | null
    videos?: string | null
    images?: string | null
    tuition_price?: any | null
    tuition_price_comment?: string | null
    career_opportunities?: string | null
    careers?: string | null
    official_data_source?: string | null
    o_language?: { __typename?: 'languages'; id: string; name?: string | null } | null
  }>
}

export const GetCoursesLanguagesDocument = gql`
  query GetCoursesLanguages($filter: course_languages_filter) {
    course_languages(filter: $filter) {
      id
      name
      direction
    }
  }
`

/**
 * __useGetCoursesLanguagesQuery__
 *
 * To run a query within a React component, call `useGetCoursesLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesLanguagesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCoursesLanguagesQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCoursesLanguagesQuery, GetCoursesLanguagesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCoursesLanguagesQuery, GetCoursesLanguagesQueryVariables>(GetCoursesLanguagesDocument, options)
}
export function useGetCoursesLanguagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesLanguagesQuery, GetCoursesLanguagesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCoursesLanguagesQuery, GetCoursesLanguagesQueryVariables>(GetCoursesLanguagesDocument, options)
}
export function useGetCoursesLanguagesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCoursesLanguagesQuery, GetCoursesLanguagesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetCoursesLanguagesQuery, GetCoursesLanguagesQueryVariables>(GetCoursesLanguagesDocument, options)
}
export type GetCoursesLanguagesQueryHookResult = ReturnType<typeof useGetCoursesLanguagesQuery>
export type GetCoursesLanguagesLazyQueryHookResult = ReturnType<typeof useGetCoursesLanguagesLazyQuery>
export type GetCoursesLanguagesSuspenseQueryHookResult = ReturnType<typeof useGetCoursesLanguagesSuspenseQuery>
export type GetCoursesLanguagesQueryResult = Apollo.QueryResult<GetCoursesLanguagesQuery, GetCoursesLanguagesQueryVariables>
export const GetCoursesDocument = gql`
  query GetCourses($filter: courses_filter) {
    courses(filter: $filter) {
      id
      type
      commercial_name
      is_official
      duration
      is_dual
      ects
      degree_type
      degree_id
      course_intro
      description
      methology
      structure
      standsfor
      info_blocks
      url
      schedules
      start_date
      is_on_demand
      application_date
      requirements
      videos
      images
      tuition_price
      tuition_price_comment
      career_opportunities
      careers
      official_data_source
      o_language {
        id
        name
      }
    }
  }
`

/**
 * __useGetCoursesQuery__
 *
 * To run a query within a React component, call `useGetCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCoursesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCoursesQuery(baseOptions?: Apollo.QueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options)
}
export function useGetCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options)
}
export function useGetCoursesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCoursesQuery, GetCoursesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetCoursesQuery, GetCoursesQueryVariables>(GetCoursesDocument, options)
}
export type GetCoursesQueryHookResult = ReturnType<typeof useGetCoursesQuery>
export type GetCoursesLazyQueryHookResult = ReturnType<typeof useGetCoursesLazyQuery>
export type GetCoursesSuspenseQueryHookResult = ReturnType<typeof useGetCoursesSuspenseQuery>
export type GetCoursesQueryResult = Apollo.QueryResult<GetCoursesQuery, GetCoursesQueryVariables>
