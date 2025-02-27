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
  create_campuses_courses_item?: Maybe<Campuses_Courses>
  create_campuses_courses_items: Array<Campuses_Courses>
  create_campuses_item?: Maybe<Campuses>
  create_campuses_items: Array<Campuses>
  create_campuses_trans_item?: Maybe<Campuses_Trans>
  create_campuses_trans_items: Array<Campuses_Trans>
  create_categories_item?: Maybe<Categories>
  create_categories_items: Array<Categories>
  create_categories_trans_item?: Maybe<Categories_Trans>
  create_categories_trans_items: Array<Categories_Trans>
  create_category_courses_item?: Maybe<Category_Courses>
  create_category_courses_items: Array<Category_Courses>
  create_category_posts_item?: Maybe<Category_Posts>
  create_category_posts_items: Array<Category_Posts>
  create_category_relationships_item?: Maybe<Category_Relationships>
  create_category_relationships_items: Array<Category_Relationships>
  create_course_languages_item?: Maybe<Course_Languages>
  create_course_languages_items: Array<Course_Languages>
  create_courses_category_courses_item?: Maybe<Courses_Category_Courses>
  create_courses_category_courses_items: Array<Courses_Category_Courses>
  create_courses_category_relationships_item?: Maybe<Courses_Category_Relationships>
  create_courses_category_relationships_items: Array<Courses_Category_Relationships>
  create_courses_disciplines_item?: Maybe<Courses_Disciplines>
  create_courses_disciplines_items: Array<Courses_Disciplines>
  create_courses_item?: Maybe<Courses>
  create_courses_items: Array<Courses>
  create_courses_languages_format_item?: Maybe<Courses_Languages_Format>
  create_courses_languages_format_items: Array<Courses_Languages_Format>
  create_courses_learning_format_item?: Maybe<Courses_Learning_Format>
  create_courses_learning_format_items: Array<Courses_Learning_Format>
  create_courses_learning_pace_item?: Maybe<Courses_Learning_Pace>
  create_courses_learning_pace_items: Array<Courses_Learning_Pace>
  create_courses_trans_item?: Maybe<Courses_Trans>
  create_courses_trans_items: Array<Courses_Trans>
  create_disciplines_item?: Maybe<Disciplines>
  create_disciplines_items: Array<Disciplines>
  create_disciplines_trans_item?: Maybe<Disciplines_Trans>
  create_disciplines_trans_items: Array<Disciplines_Trans>
  create_folders_item?: Maybe<Folders>
  create_folders_items: Array<Folders>
  create_institutions_item?: Maybe<Institutions>
  create_institutions_items: Array<Institutions>
  create_institutions_scholarships_courses_item?: Maybe<Institutions_Scholarships_Courses>
  create_institutions_scholarships_courses_items: Array<Institutions_Scholarships_Courses>
  create_institutions_tag_institutions_item?: Maybe<Institutions_Tag_Institutions>
  create_institutions_tag_institutions_items: Array<Institutions_Tag_Institutions>
  create_institutions_trans_item?: Maybe<Institutions_Trans>
  create_institutions_trans_items: Array<Institutions_Trans>
  create_joininstitutioncourse_item?: Maybe<Joininstitutioncourse>
  create_joininstitutioncourse_items: Array<Joininstitutioncourse>
  create_languages_format_item?: Maybe<Languages_Format>
  create_languages_format_items: Array<Languages_Format>
  create_languages_item?: Maybe<Languages>
  create_languages_items: Array<Languages>
  create_learning_format_item?: Maybe<Learning_Format>
  create_learning_format_items: Array<Learning_Format>
  create_learning_pace_item?: Maybe<Learning_Pace>
  create_learning_pace_items: Array<Learning_Pace>
  create_main_taxonomy_courses_item?: Maybe<Main_Taxonomy_Courses>
  create_main_taxonomy_courses_items: Array<Main_Taxonomy_Courses>
  create_main_taxonomy_item?: Maybe<Main_Taxonomy>
  create_main_taxonomy_items: Array<Main_Taxonomy>
  create_menu_items_item?: Maybe<Menu_Items>
  create_menu_items_items: Array<Menu_Items>
  create_menus_item?: Maybe<Menus>
  create_menus_items: Array<Menus>
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
  create_taxonomy_item?: Maybe<Taxonomy>
  create_taxonomy_items: Array<Taxonomy>
  create_taxonomy_level1_item?: Maybe<Taxonomy_Level1>
  create_taxonomy_level1_items: Array<Taxonomy_Level1>
  create_taxonomy_level1_trans_item?: Maybe<Taxonomy_Level1_Trans>
  create_taxonomy_level1_trans_items: Array<Taxonomy_Level1_Trans>
  create_taxonomy_level2_item?: Maybe<Taxonomy_Level2>
  create_taxonomy_level2_items: Array<Taxonomy_Level2>
  create_taxonomy_level2_trans_item?: Maybe<Taxonomy_Level2_Trans>
  create_taxonomy_level2_trans_items: Array<Taxonomy_Level2_Trans>
  create_taxonomy_trans_item?: Maybe<Taxonomy_Trans>
  create_taxonomy_trans_items: Array<Taxonomy_Trans>
  create_user_setting_item?: Maybe<User_Setting>
  create_user_setting_items: Array<User_Setting>
  create_users_item?: Maybe<Users>
  create_users_items: Array<Users>
  delete_allowed_setting_value_item?: Maybe<Delete_One>
  delete_allowed_setting_value_items?: Maybe<Delete_Many>
  delete_bilinguals_item?: Maybe<Delete_One>
  delete_bilinguals_items?: Maybe<Delete_Many>
  delete_campuses_courses_item?: Maybe<Delete_One>
  delete_campuses_courses_items?: Maybe<Delete_Many>
  delete_campuses_item?: Maybe<Delete_One>
  delete_campuses_items?: Maybe<Delete_Many>
  delete_campuses_trans_item?: Maybe<Delete_One>
  delete_campuses_trans_items?: Maybe<Delete_Many>
  delete_categories_item?: Maybe<Delete_One>
  delete_categories_items?: Maybe<Delete_Many>
  delete_categories_trans_item?: Maybe<Delete_One>
  delete_categories_trans_items?: Maybe<Delete_Many>
  delete_category_courses_item?: Maybe<Delete_One>
  delete_category_courses_items?: Maybe<Delete_Many>
  delete_category_posts_item?: Maybe<Delete_One>
  delete_category_posts_items?: Maybe<Delete_Many>
  delete_category_relationships_item?: Maybe<Delete_One>
  delete_category_relationships_items?: Maybe<Delete_Many>
  delete_course_languages_item?: Maybe<Delete_One>
  delete_course_languages_items?: Maybe<Delete_Many>
  delete_courses_category_courses_item?: Maybe<Delete_One>
  delete_courses_category_courses_items?: Maybe<Delete_Many>
  delete_courses_category_relationships_item?: Maybe<Delete_One>
  delete_courses_category_relationships_items?: Maybe<Delete_Many>
  delete_courses_disciplines_item?: Maybe<Delete_One>
  delete_courses_disciplines_items?: Maybe<Delete_Many>
  delete_courses_item?: Maybe<Delete_One>
  delete_courses_items?: Maybe<Delete_Many>
  delete_courses_languages_format_item?: Maybe<Delete_One>
  delete_courses_languages_format_items?: Maybe<Delete_Many>
  delete_courses_learning_format_item?: Maybe<Delete_One>
  delete_courses_learning_format_items?: Maybe<Delete_Many>
  delete_courses_learning_pace_item?: Maybe<Delete_One>
  delete_courses_learning_pace_items?: Maybe<Delete_Many>
  delete_courses_trans_item?: Maybe<Delete_One>
  delete_courses_trans_items?: Maybe<Delete_Many>
  delete_disciplines_item?: Maybe<Delete_One>
  delete_disciplines_items?: Maybe<Delete_Many>
  delete_disciplines_trans_item?: Maybe<Delete_One>
  delete_disciplines_trans_items?: Maybe<Delete_Many>
  delete_folders_item?: Maybe<Delete_One>
  delete_folders_items?: Maybe<Delete_Many>
  delete_institutions_item?: Maybe<Delete_One>
  delete_institutions_items?: Maybe<Delete_Many>
  delete_institutions_scholarships_courses_item?: Maybe<Delete_One>
  delete_institutions_scholarships_courses_items?: Maybe<Delete_Many>
  delete_institutions_tag_institutions_item?: Maybe<Delete_One>
  delete_institutions_tag_institutions_items?: Maybe<Delete_Many>
  delete_institutions_trans_item?: Maybe<Delete_One>
  delete_institutions_trans_items?: Maybe<Delete_Many>
  delete_joininstitutioncourse_item?: Maybe<Delete_One>
  delete_joininstitutioncourse_items?: Maybe<Delete_Many>
  delete_languages_format_item?: Maybe<Delete_One>
  delete_languages_format_items?: Maybe<Delete_Many>
  delete_languages_item?: Maybe<Delete_One>
  delete_languages_items?: Maybe<Delete_Many>
  delete_learning_format_item?: Maybe<Delete_One>
  delete_learning_format_items?: Maybe<Delete_Many>
  delete_learning_pace_item?: Maybe<Delete_One>
  delete_learning_pace_items?: Maybe<Delete_Many>
  delete_main_taxonomy_courses_item?: Maybe<Delete_One>
  delete_main_taxonomy_courses_items?: Maybe<Delete_Many>
  delete_main_taxonomy_item?: Maybe<Delete_One>
  delete_main_taxonomy_items?: Maybe<Delete_Many>
  delete_menu_items_item?: Maybe<Delete_One>
  delete_menu_items_items?: Maybe<Delete_Many>
  delete_menus_item?: Maybe<Delete_One>
  delete_menus_items?: Maybe<Delete_Many>
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
  delete_taxonomy_item?: Maybe<Delete_One>
  delete_taxonomy_items?: Maybe<Delete_Many>
  delete_taxonomy_level1_item?: Maybe<Delete_One>
  delete_taxonomy_level1_items?: Maybe<Delete_Many>
  delete_taxonomy_level1_trans_item?: Maybe<Delete_One>
  delete_taxonomy_level1_trans_items?: Maybe<Delete_Many>
  delete_taxonomy_level2_item?: Maybe<Delete_One>
  delete_taxonomy_level2_items?: Maybe<Delete_Many>
  delete_taxonomy_level2_trans_item?: Maybe<Delete_One>
  delete_taxonomy_level2_trans_items?: Maybe<Delete_Many>
  delete_taxonomy_trans_item?: Maybe<Delete_One>
  delete_taxonomy_trans_items?: Maybe<Delete_Many>
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
  update_campuses_batch: Array<Campuses>
  update_campuses_courses_batch: Array<Campuses_Courses>
  update_campuses_courses_item?: Maybe<Campuses_Courses>
  update_campuses_courses_items: Array<Campuses_Courses>
  update_campuses_item?: Maybe<Campuses>
  update_campuses_items: Array<Campuses>
  update_campuses_trans_batch: Array<Campuses_Trans>
  update_campuses_trans_item?: Maybe<Campuses_Trans>
  update_campuses_trans_items: Array<Campuses_Trans>
  update_categories_batch: Array<Categories>
  update_categories_item?: Maybe<Categories>
  update_categories_items: Array<Categories>
  update_categories_trans_batch: Array<Categories_Trans>
  update_categories_trans_item?: Maybe<Categories_Trans>
  update_categories_trans_items: Array<Categories_Trans>
  update_category_courses_batch: Array<Category_Courses>
  update_category_courses_item?: Maybe<Category_Courses>
  update_category_courses_items: Array<Category_Courses>
  update_category_posts_batch: Array<Category_Posts>
  update_category_posts_item?: Maybe<Category_Posts>
  update_category_posts_items: Array<Category_Posts>
  update_category_relationships_batch: Array<Category_Relationships>
  update_category_relationships_item?: Maybe<Category_Relationships>
  update_category_relationships_items: Array<Category_Relationships>
  update_course_languages_batch: Array<Course_Languages>
  update_course_languages_item?: Maybe<Course_Languages>
  update_course_languages_items: Array<Course_Languages>
  update_courses_batch: Array<Courses>
  update_courses_category_courses_batch: Array<Courses_Category_Courses>
  update_courses_category_courses_item?: Maybe<Courses_Category_Courses>
  update_courses_category_courses_items: Array<Courses_Category_Courses>
  update_courses_category_relationships_batch: Array<Courses_Category_Relationships>
  update_courses_category_relationships_item?: Maybe<Courses_Category_Relationships>
  update_courses_category_relationships_items: Array<Courses_Category_Relationships>
  update_courses_disciplines_batch: Array<Courses_Disciplines>
  update_courses_disciplines_item?: Maybe<Courses_Disciplines>
  update_courses_disciplines_items: Array<Courses_Disciplines>
  update_courses_item?: Maybe<Courses>
  update_courses_items: Array<Courses>
  update_courses_languages_format_batch: Array<Courses_Languages_Format>
  update_courses_languages_format_item?: Maybe<Courses_Languages_Format>
  update_courses_languages_format_items: Array<Courses_Languages_Format>
  update_courses_learning_format_batch: Array<Courses_Learning_Format>
  update_courses_learning_format_item?: Maybe<Courses_Learning_Format>
  update_courses_learning_format_items: Array<Courses_Learning_Format>
  update_courses_learning_pace_batch: Array<Courses_Learning_Pace>
  update_courses_learning_pace_item?: Maybe<Courses_Learning_Pace>
  update_courses_learning_pace_items: Array<Courses_Learning_Pace>
  update_courses_trans_batch: Array<Courses_Trans>
  update_courses_trans_item?: Maybe<Courses_Trans>
  update_courses_trans_items: Array<Courses_Trans>
  update_disciplines_batch: Array<Disciplines>
  update_disciplines_item?: Maybe<Disciplines>
  update_disciplines_items: Array<Disciplines>
  update_disciplines_trans_batch: Array<Disciplines_Trans>
  update_disciplines_trans_item?: Maybe<Disciplines_Trans>
  update_disciplines_trans_items: Array<Disciplines_Trans>
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
  update_institutions_trans_batch: Array<Institutions_Trans>
  update_institutions_trans_item?: Maybe<Institutions_Trans>
  update_institutions_trans_items: Array<Institutions_Trans>
  update_joininstitutioncourse_batch: Array<Joininstitutioncourse>
  update_joininstitutioncourse_item?: Maybe<Joininstitutioncourse>
  update_joininstitutioncourse_items: Array<Joininstitutioncourse>
  update_languages_batch: Array<Languages>
  update_languages_format_batch: Array<Languages_Format>
  update_languages_format_item?: Maybe<Languages_Format>
  update_languages_format_items: Array<Languages_Format>
  update_languages_item?: Maybe<Languages>
  update_languages_items: Array<Languages>
  update_learning_format_batch: Array<Learning_Format>
  update_learning_format_item?: Maybe<Learning_Format>
  update_learning_format_items: Array<Learning_Format>
  update_learning_pace_batch: Array<Learning_Pace>
  update_learning_pace_item?: Maybe<Learning_Pace>
  update_learning_pace_items: Array<Learning_Pace>
  update_main_taxonomy_batch: Array<Main_Taxonomy>
  update_main_taxonomy_courses_batch: Array<Main_Taxonomy_Courses>
  update_main_taxonomy_courses_item?: Maybe<Main_Taxonomy_Courses>
  update_main_taxonomy_courses_items: Array<Main_Taxonomy_Courses>
  update_main_taxonomy_item?: Maybe<Main_Taxonomy>
  update_main_taxonomy_items: Array<Main_Taxonomy>
  update_menu_items_batch: Array<Menu_Items>
  update_menu_items_item?: Maybe<Menu_Items>
  update_menu_items_items: Array<Menu_Items>
  update_menus_batch: Array<Menus>
  update_menus_item?: Maybe<Menus>
  update_menus_items: Array<Menus>
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
  update_taxonomy_batch: Array<Taxonomy>
  update_taxonomy_item?: Maybe<Taxonomy>
  update_taxonomy_items: Array<Taxonomy>
  update_taxonomy_level1_batch: Array<Taxonomy_Level1>
  update_taxonomy_level1_item?: Maybe<Taxonomy_Level1>
  update_taxonomy_level1_items: Array<Taxonomy_Level1>
  update_taxonomy_level1_trans_batch: Array<Taxonomy_Level1_Trans>
  update_taxonomy_level1_trans_item?: Maybe<Taxonomy_Level1_Trans>
  update_taxonomy_level1_trans_items: Array<Taxonomy_Level1_Trans>
  update_taxonomy_level2_batch: Array<Taxonomy_Level2>
  update_taxonomy_level2_item?: Maybe<Taxonomy_Level2>
  update_taxonomy_level2_items: Array<Taxonomy_Level2>
  update_taxonomy_level2_trans_batch: Array<Taxonomy_Level2_Trans>
  update_taxonomy_level2_trans_item?: Maybe<Taxonomy_Level2_Trans>
  update_taxonomy_level2_trans_items: Array<Taxonomy_Level2_Trans>
  update_taxonomy_trans_batch: Array<Taxonomy_Trans>
  update_taxonomy_trans_item?: Maybe<Taxonomy_Trans>
  update_taxonomy_trans_items: Array<Taxonomy_Trans>
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

export type MutationCreate_Campuses_Trans_ItemArgs = {
  data: Create_Campuses_Trans_Input
}

export type MutationCreate_Campuses_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Campuses_Trans_Input>>
  filter?: InputMaybe<Campuses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Categories_ItemArgs = {
  data: Create_Categories_Input
}

export type MutationCreate_Categories_ItemsArgs = {
  data?: InputMaybe<Array<Create_Categories_Input>>
  filter?: InputMaybe<Categories_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Categories_Trans_ItemArgs = {
  data: Create_Categories_Trans_Input
}

export type MutationCreate_Categories_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Categories_Trans_Input>>
  filter?: InputMaybe<Categories_Trans_Filter>
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

export type MutationCreate_Category_Relationships_ItemArgs = {
  data: Create_Category_Relationships_Input
}

export type MutationCreate_Category_Relationships_ItemsArgs = {
  data?: InputMaybe<Array<Create_Category_Relationships_Input>>
  filter?: InputMaybe<Category_Relationships_Filter>
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

export type MutationCreate_Courses_Category_Relationships_ItemArgs = {
  data: Create_Courses_Category_Relationships_Input
}

export type MutationCreate_Courses_Category_Relationships_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Category_Relationships_Input>>
  filter?: InputMaybe<Courses_Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_Disciplines_ItemArgs = {
  data: Create_Courses_Disciplines_Input
}

export type MutationCreate_Courses_Disciplines_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Disciplines_Input>>
  filter?: InputMaybe<Courses_Disciplines_Filter>
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

export type MutationCreate_Courses_Languages_Format_ItemArgs = {
  data: Create_Courses_Languages_Format_Input
}

export type MutationCreate_Courses_Languages_Format_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Languages_Format_Input>>
  filter?: InputMaybe<Courses_Languages_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_Learning_Format_ItemArgs = {
  data: Create_Courses_Learning_Format_Input
}

export type MutationCreate_Courses_Learning_Format_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Learning_Format_Input>>
  filter?: InputMaybe<Courses_Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_Learning_Pace_ItemArgs = {
  data: Create_Courses_Learning_Pace_Input
}

export type MutationCreate_Courses_Learning_Pace_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Learning_Pace_Input>>
  filter?: InputMaybe<Courses_Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Courses_Trans_ItemArgs = {
  data: Create_Courses_Trans_Input
}

export type MutationCreate_Courses_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Courses_Trans_Input>>
  filter?: InputMaybe<Courses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Disciplines_ItemArgs = {
  data: Create_Disciplines_Input
}

export type MutationCreate_Disciplines_ItemsArgs = {
  data?: InputMaybe<Array<Create_Disciplines_Input>>
  filter?: InputMaybe<Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Disciplines_Trans_ItemArgs = {
  data: Create_Disciplines_Trans_Input
}

export type MutationCreate_Disciplines_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Disciplines_Trans_Input>>
  filter?: InputMaybe<Disciplines_Trans_Filter>
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

export type MutationCreate_Institutions_Trans_ItemArgs = {
  data: Create_Institutions_Trans_Input
}

export type MutationCreate_Institutions_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Institutions_Trans_Input>>
  filter?: InputMaybe<Institutions_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Joininstitutioncourse_ItemArgs = {
  data: Create_Joininstitutioncourse_Input
}

export type MutationCreate_Joininstitutioncourse_ItemsArgs = {
  data?: InputMaybe<Array<Create_Joininstitutioncourse_Input>>
  filter?: InputMaybe<Joininstitutioncourse_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Languages_Format_ItemArgs = {
  data: Create_Languages_Format_Input
}

export type MutationCreate_Languages_Format_ItemsArgs = {
  data?: InputMaybe<Array<Create_Languages_Format_Input>>
  filter?: InputMaybe<Languages_Format_Filter>
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

export type MutationCreate_Learning_Format_ItemArgs = {
  data: Create_Learning_Format_Input
}

export type MutationCreate_Learning_Format_ItemsArgs = {
  data?: InputMaybe<Array<Create_Learning_Format_Input>>
  filter?: InputMaybe<Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Learning_Pace_ItemArgs = {
  data: Create_Learning_Pace_Input
}

export type MutationCreate_Learning_Pace_ItemsArgs = {
  data?: InputMaybe<Array<Create_Learning_Pace_Input>>
  filter?: InputMaybe<Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Main_Taxonomy_Courses_ItemArgs = {
  data: Create_Main_Taxonomy_Courses_Input
}

export type MutationCreate_Main_Taxonomy_Courses_ItemsArgs = {
  data?: InputMaybe<Array<Create_Main_Taxonomy_Courses_Input>>
  filter?: InputMaybe<Main_Taxonomy_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Main_Taxonomy_ItemArgs = {
  data: Create_Main_Taxonomy_Input
}

export type MutationCreate_Main_Taxonomy_ItemsArgs = {
  data?: InputMaybe<Array<Create_Main_Taxonomy_Input>>
  filter?: InputMaybe<Main_Taxonomy_Filter>
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

export type MutationCreate_Taxonomy_ItemArgs = {
  data: Create_Taxonomy_Input
}

export type MutationCreate_Taxonomy_ItemsArgs = {
  data?: InputMaybe<Array<Create_Taxonomy_Input>>
  filter?: InputMaybe<Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Taxonomy_Level1_ItemArgs = {
  data: Create_Taxonomy_Level1_Input
}

export type MutationCreate_Taxonomy_Level1_ItemsArgs = {
  data?: InputMaybe<Array<Create_Taxonomy_Level1_Input>>
  filter?: InputMaybe<Taxonomy_Level1_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Taxonomy_Level1_Trans_ItemArgs = {
  data: Create_Taxonomy_Level1_Trans_Input
}

export type MutationCreate_Taxonomy_Level1_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Taxonomy_Level1_Trans_Input>>
  filter?: InputMaybe<Taxonomy_Level1_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Taxonomy_Level2_ItemArgs = {
  data: Create_Taxonomy_Level2_Input
}

export type MutationCreate_Taxonomy_Level2_ItemsArgs = {
  data?: InputMaybe<Array<Create_Taxonomy_Level2_Input>>
  filter?: InputMaybe<Taxonomy_Level2_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Taxonomy_Level2_Trans_ItemArgs = {
  data: Create_Taxonomy_Level2_Trans_Input
}

export type MutationCreate_Taxonomy_Level2_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Taxonomy_Level2_Trans_Input>>
  filter?: InputMaybe<Taxonomy_Level2_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationCreate_Taxonomy_Trans_ItemArgs = {
  data: Create_Taxonomy_Trans_Input
}

export type MutationCreate_Taxonomy_Trans_ItemsArgs = {
  data?: InputMaybe<Array<Create_Taxonomy_Trans_Input>>
  filter?: InputMaybe<Taxonomy_Trans_Filter>
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

export type MutationDelete_Campuses_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Campuses_Trans_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Categories_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Categories_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Categories_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Categories_Trans_ItemsArgs = {
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

export type MutationDelete_Category_Relationships_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Category_Relationships_ItemsArgs = {
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

export type MutationDelete_Courses_Category_Relationships_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Category_Relationships_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Disciplines_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Disciplines_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Languages_Format_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Languages_Format_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Learning_Format_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Learning_Format_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Learning_Pace_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Learning_Pace_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Courses_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Courses_Trans_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Disciplines_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Disciplines_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Disciplines_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Disciplines_Trans_ItemsArgs = {
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

export type MutationDelete_Institutions_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Institutions_Trans_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Joininstitutioncourse_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Joininstitutioncourse_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Languages_Format_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Languages_Format_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Languages_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Languages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Learning_Format_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Learning_Format_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Learning_Pace_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Learning_Pace_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Main_Taxonomy_Courses_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Main_Taxonomy_Courses_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Main_Taxonomy_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Main_Taxonomy_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Menu_Items_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Menu_Items_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Menus_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Menus_ItemsArgs = {
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

export type MutationDelete_Taxonomy_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Taxonomy_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Taxonomy_Level1_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Taxonomy_Level1_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Taxonomy_Level1_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Taxonomy_Level1_Trans_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Taxonomy_Level2_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Taxonomy_Level2_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Taxonomy_Level2_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Taxonomy_Level2_Trans_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>
}

export type MutationDelete_Taxonomy_Trans_ItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDelete_Taxonomy_Trans_ItemsArgs = {
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

export type MutationUpdate_Campuses_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Campuses_Trans_Input>>
  filter?: InputMaybe<Campuses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Campuses_Trans_ItemArgs = {
  data: Update_Campuses_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Campuses_Trans_ItemsArgs = {
  data: Update_Campuses_Trans_Input
  filter?: InputMaybe<Campuses_Trans_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Categories_BatchArgs = {
  data?: InputMaybe<Array<Update_Categories_Input>>
  filter?: InputMaybe<Categories_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Categories_ItemArgs = {
  data: Update_Categories_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Categories_ItemsArgs = {
  data: Update_Categories_Input
  filter?: InputMaybe<Categories_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Categories_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Categories_Trans_Input>>
  filter?: InputMaybe<Categories_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Categories_Trans_ItemArgs = {
  data: Update_Categories_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Categories_Trans_ItemsArgs = {
  data: Update_Categories_Trans_Input
  filter?: InputMaybe<Categories_Trans_Filter>
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

export type MutationUpdate_Category_Relationships_BatchArgs = {
  data?: InputMaybe<Array<Update_Category_Relationships_Input>>
  filter?: InputMaybe<Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Category_Relationships_ItemArgs = {
  data: Update_Category_Relationships_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Category_Relationships_ItemsArgs = {
  data: Update_Category_Relationships_Input
  filter?: InputMaybe<Category_Relationships_Filter>
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

export type MutationUpdate_Courses_Category_Relationships_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Category_Relationships_Input>>
  filter?: InputMaybe<Courses_Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Category_Relationships_ItemArgs = {
  data: Update_Courses_Category_Relationships_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Category_Relationships_ItemsArgs = {
  data: Update_Courses_Category_Relationships_Input
  filter?: InputMaybe<Courses_Category_Relationships_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Disciplines_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Disciplines_Input>>
  filter?: InputMaybe<Courses_Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Disciplines_ItemArgs = {
  data: Update_Courses_Disciplines_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Disciplines_ItemsArgs = {
  data: Update_Courses_Disciplines_Input
  filter?: InputMaybe<Courses_Disciplines_Filter>
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

export type MutationUpdate_Courses_Languages_Format_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Languages_Format_Input>>
  filter?: InputMaybe<Courses_Languages_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Languages_Format_ItemArgs = {
  data: Update_Courses_Languages_Format_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Languages_Format_ItemsArgs = {
  data: Update_Courses_Languages_Format_Input
  filter?: InputMaybe<Courses_Languages_Format_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Learning_Format_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Learning_Format_Input>>
  filter?: InputMaybe<Courses_Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Learning_Format_ItemArgs = {
  data: Update_Courses_Learning_Format_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Learning_Format_ItemsArgs = {
  data: Update_Courses_Learning_Format_Input
  filter?: InputMaybe<Courses_Learning_Format_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Learning_Pace_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Learning_Pace_Input>>
  filter?: InputMaybe<Courses_Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Learning_Pace_ItemArgs = {
  data: Update_Courses_Learning_Pace_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Learning_Pace_ItemsArgs = {
  data: Update_Courses_Learning_Pace_Input
  filter?: InputMaybe<Courses_Learning_Pace_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Courses_Trans_Input>>
  filter?: InputMaybe<Courses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Courses_Trans_ItemArgs = {
  data: Update_Courses_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Courses_Trans_ItemsArgs = {
  data: Update_Courses_Trans_Input
  filter?: InputMaybe<Courses_Trans_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Disciplines_BatchArgs = {
  data?: InputMaybe<Array<Update_Disciplines_Input>>
  filter?: InputMaybe<Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Disciplines_ItemArgs = {
  data: Update_Disciplines_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Disciplines_ItemsArgs = {
  data: Update_Disciplines_Input
  filter?: InputMaybe<Disciplines_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Disciplines_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Disciplines_Trans_Input>>
  filter?: InputMaybe<Disciplines_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Disciplines_Trans_ItemArgs = {
  data: Update_Disciplines_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Disciplines_Trans_ItemsArgs = {
  data: Update_Disciplines_Trans_Input
  filter?: InputMaybe<Disciplines_Trans_Filter>
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

export type MutationUpdate_Institutions_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Institutions_Trans_Input>>
  filter?: InputMaybe<Institutions_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Institutions_Trans_ItemArgs = {
  data: Update_Institutions_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Institutions_Trans_ItemsArgs = {
  data: Update_Institutions_Trans_Input
  filter?: InputMaybe<Institutions_Trans_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Joininstitutioncourse_BatchArgs = {
  data?: InputMaybe<Array<Update_Joininstitutioncourse_Input>>
  filter?: InputMaybe<Joininstitutioncourse_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Joininstitutioncourse_ItemArgs = {
  data: Update_Joininstitutioncourse_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Joininstitutioncourse_ItemsArgs = {
  data: Update_Joininstitutioncourse_Input
  filter?: InputMaybe<Joininstitutioncourse_Filter>
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

export type MutationUpdate_Languages_Format_BatchArgs = {
  data?: InputMaybe<Array<Update_Languages_Format_Input>>
  filter?: InputMaybe<Languages_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Languages_Format_ItemArgs = {
  data: Update_Languages_Format_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Languages_Format_ItemsArgs = {
  data: Update_Languages_Format_Input
  filter?: InputMaybe<Languages_Format_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
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

export type MutationUpdate_Learning_Format_BatchArgs = {
  data?: InputMaybe<Array<Update_Learning_Format_Input>>
  filter?: InputMaybe<Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Learning_Format_ItemArgs = {
  data: Update_Learning_Format_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Learning_Format_ItemsArgs = {
  data: Update_Learning_Format_Input
  filter?: InputMaybe<Learning_Format_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Learning_Pace_BatchArgs = {
  data?: InputMaybe<Array<Update_Learning_Pace_Input>>
  filter?: InputMaybe<Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Learning_Pace_ItemArgs = {
  data: Update_Learning_Pace_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Learning_Pace_ItemsArgs = {
  data: Update_Learning_Pace_Input
  filter?: InputMaybe<Learning_Pace_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Main_Taxonomy_BatchArgs = {
  data?: InputMaybe<Array<Update_Main_Taxonomy_Input>>
  filter?: InputMaybe<Main_Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Main_Taxonomy_Courses_BatchArgs = {
  data?: InputMaybe<Array<Update_Main_Taxonomy_Courses_Input>>
  filter?: InputMaybe<Main_Taxonomy_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Main_Taxonomy_Courses_ItemArgs = {
  data: Update_Main_Taxonomy_Courses_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Main_Taxonomy_Courses_ItemsArgs = {
  data: Update_Main_Taxonomy_Courses_Input
  filter?: InputMaybe<Main_Taxonomy_Courses_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Main_Taxonomy_ItemArgs = {
  data: Update_Main_Taxonomy_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Main_Taxonomy_ItemsArgs = {
  data: Update_Main_Taxonomy_Input
  filter?: InputMaybe<Main_Taxonomy_Filter>
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

export type MutationUpdate_Taxonomy_BatchArgs = {
  data?: InputMaybe<Array<Update_Taxonomy_Input>>
  filter?: InputMaybe<Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_ItemArgs = {
  data: Update_Taxonomy_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Taxonomy_ItemsArgs = {
  data: Update_Taxonomy_Input
  filter?: InputMaybe<Taxonomy_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level1_BatchArgs = {
  data?: InputMaybe<Array<Update_Taxonomy_Level1_Input>>
  filter?: InputMaybe<Taxonomy_Level1_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level1_ItemArgs = {
  data: Update_Taxonomy_Level1_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Taxonomy_Level1_ItemsArgs = {
  data: Update_Taxonomy_Level1_Input
  filter?: InputMaybe<Taxonomy_Level1_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level1_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Taxonomy_Level1_Trans_Input>>
  filter?: InputMaybe<Taxonomy_Level1_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level1_Trans_ItemArgs = {
  data: Update_Taxonomy_Level1_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Taxonomy_Level1_Trans_ItemsArgs = {
  data: Update_Taxonomy_Level1_Trans_Input
  filter?: InputMaybe<Taxonomy_Level1_Trans_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level2_BatchArgs = {
  data?: InputMaybe<Array<Update_Taxonomy_Level2_Input>>
  filter?: InputMaybe<Taxonomy_Level2_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level2_ItemArgs = {
  data: Update_Taxonomy_Level2_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Taxonomy_Level2_ItemsArgs = {
  data: Update_Taxonomy_Level2_Input
  filter?: InputMaybe<Taxonomy_Level2_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level2_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Taxonomy_Level2_Trans_Input>>
  filter?: InputMaybe<Taxonomy_Level2_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Level2_Trans_ItemArgs = {
  data: Update_Taxonomy_Level2_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Taxonomy_Level2_Trans_ItemsArgs = {
  data: Update_Taxonomy_Level2_Trans_Input
  filter?: InputMaybe<Taxonomy_Level2_Trans_Filter>
  ids: Array<InputMaybe<Scalars['ID']['input']>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Trans_BatchArgs = {
  data?: InputMaybe<Array<Update_Taxonomy_Trans_Input>>
  filter?: InputMaybe<Taxonomy_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type MutationUpdate_Taxonomy_Trans_ItemArgs = {
  data: Update_Taxonomy_Trans_Input
  id: Scalars['ID']['input']
}

export type MutationUpdate_Taxonomy_Trans_ItemsArgs = {
  data: Update_Taxonomy_Trans_Input
  filter?: InputMaybe<Taxonomy_Trans_Filter>
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
  campuses: Array<Campuses>
  campuses_aggregated: Array<Campuses_Aggregated>
  campuses_by_id?: Maybe<Campuses>
  campuses_by_version?: Maybe<Version_Campuses>
  campuses_courses: Array<Campuses_Courses>
  campuses_courses_aggregated: Array<Campuses_Courses_Aggregated>
  campuses_courses_by_id?: Maybe<Campuses_Courses>
  campuses_courses_by_version?: Maybe<Version_Campuses_Courses>
  campuses_trans: Array<Campuses_Trans>
  campuses_trans_aggregated: Array<Campuses_Trans_Aggregated>
  campuses_trans_by_id?: Maybe<Campuses_Trans>
  campuses_trans_by_version?: Maybe<Version_Campuses_Trans>
  categories: Array<Categories>
  categories_aggregated: Array<Categories_Aggregated>
  categories_by_id?: Maybe<Categories>
  categories_by_version?: Maybe<Version_Categories>
  categories_trans: Array<Categories_Trans>
  categories_trans_aggregated: Array<Categories_Trans_Aggregated>
  categories_trans_by_id?: Maybe<Categories_Trans>
  categories_trans_by_version?: Maybe<Version_Categories_Trans>
  category_courses: Array<Category_Courses>
  category_courses_aggregated: Array<Category_Courses_Aggregated>
  category_courses_by_id?: Maybe<Category_Courses>
  category_courses_by_version?: Maybe<Version_Category_Courses>
  category_posts: Array<Category_Posts>
  category_posts_aggregated: Array<Category_Posts_Aggregated>
  category_posts_by_id?: Maybe<Category_Posts>
  category_posts_by_version?: Maybe<Version_Category_Posts>
  category_relationships: Array<Category_Relationships>
  category_relationships_aggregated: Array<Category_Relationships_Aggregated>
  category_relationships_by_id?: Maybe<Category_Relationships>
  category_relationships_by_version?: Maybe<Version_Category_Relationships>
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
  courses_category_relationships: Array<Courses_Category_Relationships>
  courses_category_relationships_aggregated: Array<Courses_Category_Relationships_Aggregated>
  courses_category_relationships_by_id?: Maybe<Courses_Category_Relationships>
  courses_category_relationships_by_version?: Maybe<Version_Courses_Category_Relationships>
  courses_disciplines: Array<Courses_Disciplines>
  courses_disciplines_aggregated: Array<Courses_Disciplines_Aggregated>
  courses_disciplines_by_id?: Maybe<Courses_Disciplines>
  courses_disciplines_by_version?: Maybe<Version_Courses_Disciplines>
  courses_languages_format: Array<Courses_Languages_Format>
  courses_languages_format_aggregated: Array<Courses_Languages_Format_Aggregated>
  courses_languages_format_by_id?: Maybe<Courses_Languages_Format>
  courses_languages_format_by_version?: Maybe<Version_Courses_Languages_Format>
  courses_learning_format: Array<Courses_Learning_Format>
  courses_learning_format_aggregated: Array<Courses_Learning_Format_Aggregated>
  courses_learning_format_by_id?: Maybe<Courses_Learning_Format>
  courses_learning_format_by_version?: Maybe<Version_Courses_Learning_Format>
  courses_learning_pace: Array<Courses_Learning_Pace>
  courses_learning_pace_aggregated: Array<Courses_Learning_Pace_Aggregated>
  courses_learning_pace_by_id?: Maybe<Courses_Learning_Pace>
  courses_learning_pace_by_version?: Maybe<Version_Courses_Learning_Pace>
  courses_trans: Array<Courses_Trans>
  courses_trans_aggregated: Array<Courses_Trans_Aggregated>
  courses_trans_by_id?: Maybe<Courses_Trans>
  courses_trans_by_version?: Maybe<Version_Courses_Trans>
  disciplines: Array<Disciplines>
  disciplines_aggregated: Array<Disciplines_Aggregated>
  disciplines_by_id?: Maybe<Disciplines>
  disciplines_by_version?: Maybe<Version_Disciplines>
  disciplines_trans: Array<Disciplines_Trans>
  disciplines_trans_aggregated: Array<Disciplines_Trans_Aggregated>
  disciplines_trans_by_id?: Maybe<Disciplines_Trans>
  disciplines_trans_by_version?: Maybe<Version_Disciplines_Trans>
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
  institutions_trans: Array<Institutions_Trans>
  institutions_trans_aggregated: Array<Institutions_Trans_Aggregated>
  institutions_trans_by_id?: Maybe<Institutions_Trans>
  institutions_trans_by_version?: Maybe<Version_Institutions_Trans>
  joininstitutioncourse: Array<Joininstitutioncourse>
  joininstitutioncourse_aggregated: Array<Joininstitutioncourse_Aggregated>
  joininstitutioncourse_by_id?: Maybe<Joininstitutioncourse>
  joininstitutioncourse_by_version?: Maybe<Version_Joininstitutioncourse>
  languages: Array<Languages>
  languages_aggregated: Array<Languages_Aggregated>
  languages_by_id?: Maybe<Languages>
  languages_by_version?: Maybe<Version_Languages>
  languages_format: Array<Languages_Format>
  languages_format_aggregated: Array<Languages_Format_Aggregated>
  languages_format_by_id?: Maybe<Languages_Format>
  languages_format_by_version?: Maybe<Version_Languages_Format>
  learning_format: Array<Learning_Format>
  learning_format_aggregated: Array<Learning_Format_Aggregated>
  learning_format_by_id?: Maybe<Learning_Format>
  learning_format_by_version?: Maybe<Version_Learning_Format>
  learning_pace: Array<Learning_Pace>
  learning_pace_aggregated: Array<Learning_Pace_Aggregated>
  learning_pace_by_id?: Maybe<Learning_Pace>
  learning_pace_by_version?: Maybe<Version_Learning_Pace>
  main_taxonomy: Array<Main_Taxonomy>
  main_taxonomy_aggregated: Array<Main_Taxonomy_Aggregated>
  main_taxonomy_by_id?: Maybe<Main_Taxonomy>
  main_taxonomy_by_version?: Maybe<Version_Main_Taxonomy>
  main_taxonomy_courses: Array<Main_Taxonomy_Courses>
  main_taxonomy_courses_aggregated: Array<Main_Taxonomy_Courses_Aggregated>
  main_taxonomy_courses_by_id?: Maybe<Main_Taxonomy_Courses>
  main_taxonomy_courses_by_version?: Maybe<Version_Main_Taxonomy_Courses>
  menu_items: Array<Menu_Items>
  menu_items_aggregated: Array<Menu_Items_Aggregated>
  menu_items_by_id?: Maybe<Menu_Items>
  menu_items_by_version?: Maybe<Version_Menu_Items>
  menus: Array<Menus>
  menus_aggregated: Array<Menus_Aggregated>
  menus_by_id?: Maybe<Menus>
  menus_by_version?: Maybe<Version_Menus>
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
  taxonomy: Array<Taxonomy>
  taxonomy_aggregated: Array<Taxonomy_Aggregated>
  taxonomy_by_id?: Maybe<Taxonomy>
  taxonomy_by_version?: Maybe<Version_Taxonomy>
  taxonomy_level1: Array<Taxonomy_Level1>
  taxonomy_level1_aggregated: Array<Taxonomy_Level1_Aggregated>
  taxonomy_level1_by_id?: Maybe<Taxonomy_Level1>
  taxonomy_level1_by_version?: Maybe<Version_Taxonomy_Level1>
  taxonomy_level1_trans: Array<Taxonomy_Level1_Trans>
  taxonomy_level1_trans_aggregated: Array<Taxonomy_Level1_Trans_Aggregated>
  taxonomy_level1_trans_by_id?: Maybe<Taxonomy_Level1_Trans>
  taxonomy_level1_trans_by_version?: Maybe<Version_Taxonomy_Level1_Trans>
  taxonomy_level2: Array<Taxonomy_Level2>
  taxonomy_level2_aggregated: Array<Taxonomy_Level2_Aggregated>
  taxonomy_level2_by_id?: Maybe<Taxonomy_Level2>
  taxonomy_level2_by_version?: Maybe<Version_Taxonomy_Level2>
  taxonomy_level2_trans: Array<Taxonomy_Level2_Trans>
  taxonomy_level2_trans_aggregated: Array<Taxonomy_Level2_Trans_Aggregated>
  taxonomy_level2_trans_by_id?: Maybe<Taxonomy_Level2_Trans>
  taxonomy_level2_trans_by_version?: Maybe<Version_Taxonomy_Level2_Trans>
  taxonomy_trans: Array<Taxonomy_Trans>
  taxonomy_trans_aggregated: Array<Taxonomy_Trans_Aggregated>
  taxonomy_trans_by_id?: Maybe<Taxonomy_Trans>
  taxonomy_trans_by_version?: Maybe<Version_Taxonomy_Trans>
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

export type QueryCampuses_TransArgs = {
  filter?: InputMaybe<Campuses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCampuses_Trans_AggregatedArgs = {
  filter?: InputMaybe<Campuses_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCampuses_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCampuses_Trans_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCategoriesArgs = {
  filter?: InputMaybe<Categories_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategories_AggregatedArgs = {
  filter?: InputMaybe<Categories_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategories_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCategories_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCategories_TransArgs = {
  filter?: InputMaybe<Categories_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategories_Trans_AggregatedArgs = {
  filter?: InputMaybe<Categories_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategories_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCategories_Trans_By_VersionArgs = {
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

export type QueryCategory_RelationshipsArgs = {
  filter?: InputMaybe<Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategory_Relationships_AggregatedArgs = {
  filter?: InputMaybe<Category_Relationships_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCategory_Relationships_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCategory_Relationships_By_VersionArgs = {
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

export type QueryCourses_Category_RelationshipsArgs = {
  filter?: InputMaybe<Courses_Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Category_Relationships_AggregatedArgs = {
  filter?: InputMaybe<Courses_Category_Relationships_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Category_Relationships_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Category_Relationships_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_DisciplinesArgs = {
  filter?: InputMaybe<Courses_Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Disciplines_AggregatedArgs = {
  filter?: InputMaybe<Courses_Disciplines_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Disciplines_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Disciplines_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_Languages_FormatArgs = {
  filter?: InputMaybe<Courses_Languages_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Languages_Format_AggregatedArgs = {
  filter?: InputMaybe<Courses_Languages_Format_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Languages_Format_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Languages_Format_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_Learning_FormatArgs = {
  filter?: InputMaybe<Courses_Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Learning_Format_AggregatedArgs = {
  filter?: InputMaybe<Courses_Learning_Format_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Learning_Format_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Learning_Format_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_Learning_PaceArgs = {
  filter?: InputMaybe<Courses_Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Learning_Pace_AggregatedArgs = {
  filter?: InputMaybe<Courses_Learning_Pace_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Learning_Pace_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Learning_Pace_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryCourses_TransArgs = {
  filter?: InputMaybe<Courses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Trans_AggregatedArgs = {
  filter?: InputMaybe<Courses_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryCourses_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryCourses_Trans_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryDisciplinesArgs = {
  filter?: InputMaybe<Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDisciplines_AggregatedArgs = {
  filter?: InputMaybe<Disciplines_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDisciplines_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryDisciplines_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryDisciplines_TransArgs = {
  filter?: InputMaybe<Disciplines_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDisciplines_Trans_AggregatedArgs = {
  filter?: InputMaybe<Disciplines_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryDisciplines_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryDisciplines_Trans_By_VersionArgs = {
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

export type QueryInstitutions_TransArgs = {
  filter?: InputMaybe<Institutions_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_Trans_AggregatedArgs = {
  filter?: InputMaybe<Institutions_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryInstitutions_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryInstitutions_Trans_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryJoininstitutioncourseArgs = {
  filter?: InputMaybe<Joininstitutioncourse_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryJoininstitutioncourse_AggregatedArgs = {
  filter?: InputMaybe<Joininstitutioncourse_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryJoininstitutioncourse_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryJoininstitutioncourse_By_VersionArgs = {
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

export type QueryLanguages_FormatArgs = {
  filter?: InputMaybe<Languages_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLanguages_Format_AggregatedArgs = {
  filter?: InputMaybe<Languages_Format_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLanguages_Format_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryLanguages_Format_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryLearning_FormatArgs = {
  filter?: InputMaybe<Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLearning_Format_AggregatedArgs = {
  filter?: InputMaybe<Learning_Format_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLearning_Format_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryLearning_Format_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryLearning_PaceArgs = {
  filter?: InputMaybe<Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLearning_Pace_AggregatedArgs = {
  filter?: InputMaybe<Learning_Pace_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryLearning_Pace_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryLearning_Pace_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryMain_TaxonomyArgs = {
  filter?: InputMaybe<Main_Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMain_Taxonomy_AggregatedArgs = {
  filter?: InputMaybe<Main_Taxonomy_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMain_Taxonomy_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryMain_Taxonomy_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryMain_Taxonomy_CoursesArgs = {
  filter?: InputMaybe<Main_Taxonomy_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMain_Taxonomy_Courses_AggregatedArgs = {
  filter?: InputMaybe<Main_Taxonomy_Courses_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryMain_Taxonomy_Courses_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryMain_Taxonomy_Courses_By_VersionArgs = {
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

export type QueryTaxonomyArgs = {
  filter?: InputMaybe<Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_AggregatedArgs = {
  filter?: InputMaybe<Taxonomy_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTaxonomy_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTaxonomy_Level1Args = {
  filter?: InputMaybe<Taxonomy_Level1_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level1_AggregatedArgs = {
  filter?: InputMaybe<Taxonomy_Level1_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level1_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTaxonomy_Level1_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTaxonomy_Level1_TransArgs = {
  filter?: InputMaybe<Taxonomy_Level1_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level1_Trans_AggregatedArgs = {
  filter?: InputMaybe<Taxonomy_Level1_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level1_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTaxonomy_Level1_Trans_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTaxonomy_Level2Args = {
  filter?: InputMaybe<Taxonomy_Level2_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level2_AggregatedArgs = {
  filter?: InputMaybe<Taxonomy_Level2_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level2_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTaxonomy_Level2_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTaxonomy_Level2_TransArgs = {
  filter?: InputMaybe<Taxonomy_Level2_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level2_Trans_AggregatedArgs = {
  filter?: InputMaybe<Taxonomy_Level2_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Level2_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTaxonomy_Level2_Trans_By_VersionArgs = {
  id: Scalars['ID']['input']
  version: Scalars['String']['input']
}

export type QueryTaxonomy_TransArgs = {
  filter?: InputMaybe<Taxonomy_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Trans_AggregatedArgs = {
  filter?: InputMaybe<Taxonomy_Trans_Filter>
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type QueryTaxonomy_Trans_By_IdArgs = {
  id: Scalars['ID']['input']
  version?: InputMaybe<Scalars['String']['input']>
}

export type QueryTaxonomy_Trans_By_VersionArgs = {
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
  campuses_courses_mutated?: Maybe<Campuses_Courses_Mutated>
  campuses_mutated?: Maybe<Campuses_Mutated>
  campuses_trans_mutated?: Maybe<Campuses_Trans_Mutated>
  categories_mutated?: Maybe<Categories_Mutated>
  categories_trans_mutated?: Maybe<Categories_Trans_Mutated>
  category_courses_mutated?: Maybe<Category_Courses_Mutated>
  category_posts_mutated?: Maybe<Category_Posts_Mutated>
  category_relationships_mutated?: Maybe<Category_Relationships_Mutated>
  course_languages_mutated?: Maybe<Course_Languages_Mutated>
  courses_category_courses_mutated?: Maybe<Courses_Category_Courses_Mutated>
  courses_category_relationships_mutated?: Maybe<Courses_Category_Relationships_Mutated>
  courses_disciplines_mutated?: Maybe<Courses_Disciplines_Mutated>
  courses_languages_format_mutated?: Maybe<Courses_Languages_Format_Mutated>
  courses_learning_format_mutated?: Maybe<Courses_Learning_Format_Mutated>
  courses_learning_pace_mutated?: Maybe<Courses_Learning_Pace_Mutated>
  courses_mutated?: Maybe<Courses_Mutated>
  courses_trans_mutated?: Maybe<Courses_Trans_Mutated>
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
  disciplines_mutated?: Maybe<Disciplines_Mutated>
  disciplines_trans_mutated?: Maybe<Disciplines_Trans_Mutated>
  folders_mutated?: Maybe<Folders_Mutated>
  institutions_mutated?: Maybe<Institutions_Mutated>
  institutions_scholarships_courses_mutated?: Maybe<Institutions_Scholarships_Courses_Mutated>
  institutions_tag_institutions_mutated?: Maybe<Institutions_Tag_Institutions_Mutated>
  institutions_trans_mutated?: Maybe<Institutions_Trans_Mutated>
  joininstitutioncourse_mutated?: Maybe<Joininstitutioncourse_Mutated>
  languages_format_mutated?: Maybe<Languages_Format_Mutated>
  languages_mutated?: Maybe<Languages_Mutated>
  learning_format_mutated?: Maybe<Learning_Format_Mutated>
  learning_pace_mutated?: Maybe<Learning_Pace_Mutated>
  main_taxonomy_courses_mutated?: Maybe<Main_Taxonomy_Courses_Mutated>
  main_taxonomy_mutated?: Maybe<Main_Taxonomy_Mutated>
  menu_items_mutated?: Maybe<Menu_Items_Mutated>
  menus_mutated?: Maybe<Menus_Mutated>
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
  taxonomy_level1_mutated?: Maybe<Taxonomy_Level1_Mutated>
  taxonomy_level1_trans_mutated?: Maybe<Taxonomy_Level1_Trans_Mutated>
  taxonomy_level2_mutated?: Maybe<Taxonomy_Level2_Mutated>
  taxonomy_level2_trans_mutated?: Maybe<Taxonomy_Level2_Trans_Mutated>
  taxonomy_mutated?: Maybe<Taxonomy_Mutated>
  taxonomy_trans_mutated?: Maybe<Taxonomy_Trans_Mutated>
  user_setting_mutated?: Maybe<User_Setting_Mutated>
  users_mutated?: Maybe<Users_Mutated>
}

export type SubscriptionAllowed_Setting_Value_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionBilinguals_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCampuses_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCampuses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCampuses_Trans_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCategories_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCategories_Trans_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCategory_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCategory_Posts_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCategory_Relationships_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourse_Languages_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Category_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Category_Relationships_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Disciplines_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Languages_Format_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Learning_Format_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Learning_Pace_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionCourses_Trans_MutatedArgs = {
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

export type SubscriptionDisciplines_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionDisciplines_Trans_MutatedArgs = {
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

export type SubscriptionInstitutions_Trans_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionJoininstitutioncourse_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionLanguages_Format_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionLearning_Format_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionLearning_Pace_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMain_Taxonomy_Courses_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMain_Taxonomy_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMenu_Items_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionMenus_MutatedArgs = {
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

export type SubscriptionTaxonomy_Level1_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTaxonomy_Level1_Trans_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTaxonomy_Level2_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTaxonomy_Level2_Trans_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTaxonomy_MutatedArgs = {
  event?: InputMaybe<EventEnum>
}

export type SubscriptionTaxonomy_Trans_MutatedArgs = {
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
  avg?: Maybe<Allowed_Setting_Value_Aggregated_Fields>
  avgDistinct?: Maybe<Allowed_Setting_Value_Aggregated_Fields>
  count?: Maybe<Allowed_Setting_Value_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Allowed_Setting_Value_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Allowed_Setting_Value_Aggregated_Fields>
  min?: Maybe<Allowed_Setting_Value_Aggregated_Fields>
  sum?: Maybe<Allowed_Setting_Value_Aggregated_Fields>
  sumDistinct?: Maybe<Allowed_Setting_Value_Aggregated_Fields>
}

export type Allowed_Setting_Value_Aggregated_Count = {
  __typename?: 'allowed_setting_value_aggregated_count'
  caption?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  item_value?: Maybe<Scalars['Int']['output']>
  settings_id?: Maybe<Scalars['Int']['output']>
}

export type Allowed_Setting_Value_Aggregated_Fields = {
  __typename?: 'allowed_setting_value_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  settings_id?: Maybe<Scalars['Float']['output']>
}

export type Allowed_Setting_Value_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Allowed_Setting_Value_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Allowed_Setting_Value_Filter>>>
  caption?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
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

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>
  _neq?: InputMaybe<Scalars['Boolean']['input']>
  _nnull?: InputMaybe<Scalars['Boolean']['input']>
  _null?: InputMaybe<Scalars['Boolean']['input']>
}

export type Campuses = {
  __typename?: 'campuses'
  campuses_trans?: Maybe<Array<Maybe<Campuses_Trans>>>
  campuses_trans_func?: Maybe<Count_Functions>
  city?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  images?: Maybe<Scalars['String']['output']>
  institutions_id?: Maybe<Institutions>
  phone?: Maybe<Scalars['String']['output']>
  postal_code?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  street_address?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type CampusesCampuses_TransArgs = {
  filter?: InputMaybe<Campuses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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
  avg?: Maybe<Campuses_Aggregated_Fields>
  avgDistinct?: Maybe<Campuses_Aggregated_Fields>
  count?: Maybe<Campuses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Campuses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Campuses_Aggregated_Fields>
  min?: Maybe<Campuses_Aggregated_Fields>
  sum?: Maybe<Campuses_Aggregated_Fields>
  sumDistinct?: Maybe<Campuses_Aggregated_Fields>
}

export type Campuses_Aggregated_Count = {
  __typename?: 'campuses_aggregated_count'
  campuses_trans?: Maybe<Scalars['Int']['output']>
  city?: Maybe<Scalars['Int']['output']>
  country?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  images?: Maybe<Scalars['Int']['output']>
  institutions_id?: Maybe<Scalars['Int']['output']>
  phone?: Maybe<Scalars['Int']['output']>
  postal_code?: Maybe<Scalars['Int']['output']>
  state?: Maybe<Scalars['Int']['output']>
  street_address?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
}

export type Campuses_Aggregated_Fields = {
  __typename?: 'campuses_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  institutions_id?: Maybe<Scalars['Float']['output']>
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
  avg?: Maybe<Campuses_Courses_Aggregated_Fields>
  avgDistinct?: Maybe<Campuses_Courses_Aggregated_Fields>
  count?: Maybe<Campuses_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Campuses_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Campuses_Courses_Aggregated_Fields>
  min?: Maybe<Campuses_Courses_Aggregated_Fields>
  sum?: Maybe<Campuses_Courses_Aggregated_Fields>
  sumDistinct?: Maybe<Campuses_Courses_Aggregated_Fields>
}

export type Campuses_Courses_Aggregated_Count = {
  __typename?: 'campuses_courses_aggregated_count'
  campuses_id?: Maybe<Scalars['Int']['output']>
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Campuses_Courses_Aggregated_Fields = {
  __typename?: 'campuses_courses_aggregated_fields'
  campuses_id?: Maybe<Scalars['Float']['output']>
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type Campuses_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Campuses_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Campuses_Courses_Filter>>>
  campuses_id?: InputMaybe<Campuses_Filter>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
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
  campuses_trans?: InputMaybe<Campuses_Trans_Filter>
  campuses_trans_func?: InputMaybe<Count_Function_Filter_Operators>
  city?: InputMaybe<String_Filter_Operators>
  country?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  images?: InputMaybe<String_Filter_Operators>
  institutions_id?: InputMaybe<Institutions_Filter>
  phone?: InputMaybe<String_Filter_Operators>
  postal_code?: InputMaybe<String_Filter_Operators>
  state?: InputMaybe<String_Filter_Operators>
  street_address?: InputMaybe<String_Filter_Operators>
  type?: InputMaybe<String_Filter_Operators>
}

export type Campuses_Mutated = {
  __typename?: 'campuses_mutated'
  data?: Maybe<Campuses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Campuses_Trans = {
  __typename?: 'campuses_trans'
  campuses_id?: Maybe<Campuses>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  intro?: Maybe<Scalars['String']['output']>
  language_id?: Maybe<Languages>
  name?: Maybe<Scalars['String']['output']>
}

export type Campuses_TransCampuses_IdArgs = {
  filter?: InputMaybe<Campuses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Campuses_TransLanguage_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Campuses_Trans_Aggregated = {
  __typename?: 'campuses_trans_aggregated'
  avg?: Maybe<Campuses_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Campuses_Trans_Aggregated_Fields>
  count?: Maybe<Campuses_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Campuses_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Campuses_Trans_Aggregated_Fields>
  min?: Maybe<Campuses_Trans_Aggregated_Fields>
  sum?: Maybe<Campuses_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Campuses_Trans_Aggregated_Fields>
}

export type Campuses_Trans_Aggregated_Count = {
  __typename?: 'campuses_trans_aggregated_count'
  campuses_id?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  intro?: Maybe<Scalars['Int']['output']>
  language_id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Campuses_Trans_Aggregated_Fields = {
  __typename?: 'campuses_trans_aggregated_fields'
  campuses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  language_id?: Maybe<Scalars['Float']['output']>
}

export type Campuses_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Campuses_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Campuses_Trans_Filter>>>
  campuses_id?: InputMaybe<Campuses_Filter>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  intro?: InputMaybe<String_Filter_Operators>
  language_id?: InputMaybe<Languages_Filter>
  name?: InputMaybe<String_Filter_Operators>
}

export type Campuses_Trans_Mutated = {
  __typename?: 'campuses_trans_mutated'
  data?: Maybe<Campuses_Trans>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Categories = {
  __typename?: 'categories'
  category_trans?: Maybe<Array<Maybe<Categories_Trans>>>
  category_trans_func?: Maybe<Count_Functions>
  id: Scalars['ID']['output']
}

export type CategoriesCategory_TransArgs = {
  filter?: InputMaybe<Categories_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Categories_Aggregated = {
  __typename?: 'categories_aggregated'
  count?: Maybe<Categories_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Categories_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Categories_Aggregated_Count = {
  __typename?: 'categories_aggregated_count'
  category_trans?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Categories_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Categories_Filter>>>
  category_trans?: InputMaybe<Categories_Trans_Filter>
  category_trans_func?: InputMaybe<Count_Function_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
}

export type Categories_Mutated = {
  __typename?: 'categories_mutated'
  data?: Maybe<Categories>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Categories_Trans = {
  __typename?: 'categories_trans'
  category_id?: Maybe<Categories>
  id: Scalars['ID']['output']
  language?: Maybe<Languages>
  name?: Maybe<Scalars['String']['output']>
  name_normalized?: Maybe<Scalars['String']['output']>
}

export type Categories_TransCategory_IdArgs = {
  filter?: InputMaybe<Categories_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Categories_TransLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Categories_Trans_Aggregated = {
  __typename?: 'categories_trans_aggregated'
  avg?: Maybe<Categories_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Categories_Trans_Aggregated_Fields>
  count?: Maybe<Categories_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Categories_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Categories_Trans_Aggregated_Fields>
  min?: Maybe<Categories_Trans_Aggregated_Fields>
  sum?: Maybe<Categories_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Categories_Trans_Aggregated_Fields>
}

export type Categories_Trans_Aggregated_Count = {
  __typename?: 'categories_trans_aggregated_count'
  category_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  language?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  name_normalized?: Maybe<Scalars['Int']['output']>
}

export type Categories_Trans_Aggregated_Fields = {
  __typename?: 'categories_trans_aggregated_fields'
  language?: Maybe<Scalars['Float']['output']>
}

export type Categories_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Categories_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Categories_Trans_Filter>>>
  category_id?: InputMaybe<Categories_Filter>
  id?: InputMaybe<String_Filter_Operators>
  language?: InputMaybe<Languages_Filter>
  name?: InputMaybe<String_Filter_Operators>
  name_normalized?: InputMaybe<String_Filter_Operators>
}

export type Categories_Trans_Mutated = {
  __typename?: 'categories_trans_mutated'
  data?: Maybe<Categories_Trans>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Category_Courses = {
  __typename?: 'category_courses'
  category_courses?: Maybe<Array<Maybe<Category_Courses>>>
  category_courses_id?: Maybe<Category_Courses>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
}

export type Category_CoursesCategory_CoursesArgs = {
  filter?: InputMaybe<Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_CoursesCategory_Courses_IdArgs = {
  filter?: InputMaybe<Category_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_Courses_Aggregated = {
  __typename?: 'category_courses_aggregated'
  avg?: Maybe<Category_Courses_Aggregated_Fields>
  avgDistinct?: Maybe<Category_Courses_Aggregated_Fields>
  count?: Maybe<Category_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Category_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Category_Courses_Aggregated_Fields>
  min?: Maybe<Category_Courses_Aggregated_Fields>
  sum?: Maybe<Category_Courses_Aggregated_Fields>
  sumDistinct?: Maybe<Category_Courses_Aggregated_Fields>
}

export type Category_Courses_Aggregated_Count = {
  __typename?: 'category_courses_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Category_Courses_Aggregated_Fields = {
  __typename?: 'category_courses_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Category_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Category_Courses_Filter>>>
  category_courses?: InputMaybe<Category_Courses_Filter>
  category_courses_id?: InputMaybe<Category_Courses_Filter>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
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

export type Category_Relationships = {
  __typename?: 'category_relationships'
  child_id?: Maybe<Categories>
  courses?: Maybe<Array<Maybe<Courses_Category_Relationships>>>
  courses_func?: Maybe<Count_Functions>
  id: Scalars['ID']['output']
  parent_id?: Maybe<Categories>
}

export type Category_RelationshipsChild_IdArgs = {
  filter?: InputMaybe<Categories_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_RelationshipsCoursesArgs = {
  filter?: InputMaybe<Courses_Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_RelationshipsParent_IdArgs = {
  filter?: InputMaybe<Categories_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Category_Relationships_Aggregated = {
  __typename?: 'category_relationships_aggregated'
  count?: Maybe<Category_Relationships_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Category_Relationships_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Category_Relationships_Aggregated_Count = {
  __typename?: 'category_relationships_aggregated_count'
  child_id?: Maybe<Scalars['Int']['output']>
  courses?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  parent_id?: Maybe<Scalars['Int']['output']>
}

export type Category_Relationships_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Category_Relationships_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Category_Relationships_Filter>>>
  child_id?: InputMaybe<Categories_Filter>
  courses?: InputMaybe<Courses_Category_Relationships_Filter>
  courses_func?: InputMaybe<Count_Function_Filter_Operators>
  id?: InputMaybe<String_Filter_Operators>
  parent_id?: InputMaybe<Categories_Filter>
}

export type Category_Relationships_Mutated = {
  __typename?: 'category_relationships_mutated'
  data?: Maybe<Category_Relationships>
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
  avg?: Maybe<Course_Languages_Aggregated_Fields>
  avgDistinct?: Maybe<Course_Languages_Aggregated_Fields>
  count?: Maybe<Course_Languages_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Course_Languages_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Course_Languages_Aggregated_Fields>
  min?: Maybe<Course_Languages_Aggregated_Fields>
  sum?: Maybe<Course_Languages_Aggregated_Fields>
  sumDistinct?: Maybe<Course_Languages_Aggregated_Fields>
}

export type Course_Languages_Aggregated_Count = {
  __typename?: 'course_languages_aggregated_count'
  direction?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Course_Languages_Aggregated_Fields = {
  __typename?: 'course_languages_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Course_Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Course_Languages_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Course_Languages_Filter>>>
  direction?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
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
  average_price?: Maybe<Scalars['String']['output']>
  bilinguals_id?: Maybe<Bilinguals>
  campuses_courses?: Maybe<Array<Maybe<Campuses_Courses>>>
  campuses_courses_func?: Maybe<Count_Functions>
  careers_list?: Maybe<Scalars['JSON']['output']>
  careers_list_func?: Maybe<Count_Functions>
  categories?: Maybe<Array<Maybe<Courses_Category_Relationships>>>
  categories_func?: Maybe<Count_Functions>
  course_language?: Maybe<Array<Maybe<Courses_Languages_Format>>>
  course_language_func?: Maybe<Count_Functions>
  course_trans?: Maybe<Array<Maybe<Courses_Trans>>>
  course_trans_func?: Maybe<Count_Functions>
  degree_id?: Maybe<Scalars['Int']['output']>
  degree_type?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  duration_class?: Maybe<Scalars['String']['output']>
  ects?: Maybe<Scalars['Int']['output']>
  end_date?: Maybe<Scalars['Date']['output']>
  end_date_func?: Maybe<Date_Functions>
  id: Scalars['ID']['output']
  id_mp?: Maybe<Scalars['String']['output']>
  images?: Maybe<Scalars['String']['output']>
  institutions?: Maybe<Array<Maybe<Joininstitutioncourse>>>
  institutions_func?: Maybe<Count_Functions>
  is_dual?: Maybe<Scalars['Boolean']['output']>
  is_official?: Maybe<Scalars['Boolean']['output']>
  is_on_demand?: Maybe<Scalars['Boolean']['output']>
  learning_format_id?: Maybe<Array<Maybe<Courses_Learning_Format>>>
  learning_format_id_func?: Maybe<Count_Functions>
  learning_pace_id?: Maybe<Array<Maybe<Courses_Learning_Pace>>>
  learning_pace_id_func?: Maybe<Count_Functions>
  main_taxonomy?: Maybe<Array<Maybe<Main_Taxonomy_Courses>>>
  main_taxonomy_func?: Maybe<Count_Functions>
  meta_tags?: Maybe<Scalars['JSON']['output']>
  meta_tags_func?: Maybe<Count_Functions>
  official_data_source?: Maybe<Scalars['String']['output']>
  places_available?: Maybe<Scalars['Int']['output']>
  profiles?: Maybe<Array<Maybe<Profiles>>>
  profiles_func?: Maybe<Count_Functions>
  start_date?: Maybe<Scalars['Date']['output']>
  start_date_func?: Maybe<Date_Functions>
  tuition_price?: Maybe<Scalars['JSON']['output']>
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

export type CoursesCampuses_CoursesArgs = {
  filter?: InputMaybe<Campuses_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesCategoriesArgs = {
  filter?: InputMaybe<Courses_Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesCourse_LanguageArgs = {
  filter?: InputMaybe<Courses_Languages_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesCourse_TransArgs = {
  filter?: InputMaybe<Courses_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesInstitutionsArgs = {
  filter?: InputMaybe<Joininstitutioncourse_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesLearning_Format_IdArgs = {
  filter?: InputMaybe<Courses_Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesLearning_Pace_IdArgs = {
  filter?: InputMaybe<Courses_Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesMain_TaxonomyArgs = {
  filter?: InputMaybe<Main_Taxonomy_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CoursesProfilesArgs = {
  filter?: InputMaybe<Profiles_Filter>
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
  average_price?: Maybe<Scalars['Int']['output']>
  bilinguals_id?: Maybe<Scalars['Int']['output']>
  campuses_courses?: Maybe<Scalars['Int']['output']>
  careers_list?: Maybe<Scalars['Int']['output']>
  categories?: Maybe<Scalars['Int']['output']>
  course_language?: Maybe<Scalars['Int']['output']>
  course_trans?: Maybe<Scalars['Int']['output']>
  degree_id?: Maybe<Scalars['Int']['output']>
  degree_type?: Maybe<Scalars['Int']['output']>
  duration?: Maybe<Scalars['Int']['output']>
  duration_class?: Maybe<Scalars['Int']['output']>
  ects?: Maybe<Scalars['Int']['output']>
  end_date?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  id_mp?: Maybe<Scalars['Int']['output']>
  images?: Maybe<Scalars['Int']['output']>
  institutions?: Maybe<Scalars['Int']['output']>
  is_dual?: Maybe<Scalars['Int']['output']>
  is_official?: Maybe<Scalars['Int']['output']>
  is_on_demand?: Maybe<Scalars['Int']['output']>
  learning_format_id?: Maybe<Scalars['Int']['output']>
  learning_pace_id?: Maybe<Scalars['Int']['output']>
  main_taxonomy?: Maybe<Scalars['Int']['output']>
  meta_tags?: Maybe<Scalars['Int']['output']>
  official_data_source?: Maybe<Scalars['Int']['output']>
  places_available?: Maybe<Scalars['Int']['output']>
  profiles?: Maybe<Scalars['Int']['output']>
  start_date?: Maybe<Scalars['Int']['output']>
  tuition_price?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['Int']['output']>
  videos?: Maybe<Scalars['Int']['output']>
}

export type Courses_Aggregated_Fields = {
  __typename?: 'courses_aggregated_fields'
  degree_id?: Maybe<Scalars['Float']['output']>
  ects?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  places_available?: Maybe<Scalars['Float']['output']>
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
  avg?: Maybe<Courses_Category_Courses_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Category_Courses_Aggregated_Fields>
  count?: Maybe<Courses_Category_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Category_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Category_Courses_Aggregated_Fields>
  min?: Maybe<Courses_Category_Courses_Aggregated_Fields>
  sum?: Maybe<Courses_Category_Courses_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Category_Courses_Aggregated_Fields>
}

export type Courses_Category_Courses_Aggregated_Count = {
  __typename?: 'courses_category_courses_aggregated_count'
  category_courses_id?: Maybe<Scalars['Int']['output']>
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Category_Courses_Aggregated_Fields = {
  __typename?: 'courses_category_courses_aggregated_fields'
  category_courses_id?: Maybe<Scalars['Float']['output']>
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Category_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Category_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Category_Courses_Filter>>>
  category_courses_id?: InputMaybe<Category_Courses_Filter>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
}

export type Courses_Category_Courses_Mutated = {
  __typename?: 'courses_category_courses_mutated'
  data?: Maybe<Courses_Category_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Category_Relationships = {
  __typename?: 'courses_category_relationships'
  category_relationships_id?: Maybe<Category_Relationships>
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
}

export type Courses_Category_RelationshipsCategory_Relationships_IdArgs = {
  filter?: InputMaybe<Category_Relationships_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Category_RelationshipsCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Category_Relationships_Aggregated = {
  __typename?: 'courses_category_relationships_aggregated'
  avg?: Maybe<Courses_Category_Relationships_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Category_Relationships_Aggregated_Fields>
  count?: Maybe<Courses_Category_Relationships_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Category_Relationships_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Category_Relationships_Aggregated_Fields>
  min?: Maybe<Courses_Category_Relationships_Aggregated_Fields>
  sum?: Maybe<Courses_Category_Relationships_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Category_Relationships_Aggregated_Fields>
}

export type Courses_Category_Relationships_Aggregated_Count = {
  __typename?: 'courses_category_relationships_aggregated_count'
  category_relationships_id?: Maybe<Scalars['Int']['output']>
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Category_Relationships_Aggregated_Fields = {
  __typename?: 'courses_category_relationships_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Category_Relationships_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Category_Relationships_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Category_Relationships_Filter>>>
  category_relationships_id?: InputMaybe<Category_Relationships_Filter>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
}

export type Courses_Category_Relationships_Mutated = {
  __typename?: 'courses_category_relationships_mutated'
  data?: Maybe<Courses_Category_Relationships>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Disciplines = {
  __typename?: 'courses_disciplines'
  courses_id?: Maybe<Courses>
  disciplines_id?: Maybe<Disciplines>
  id: Scalars['ID']['output']
}

export type Courses_DisciplinesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_DisciplinesDisciplines_IdArgs = {
  filter?: InputMaybe<Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Disciplines_Aggregated = {
  __typename?: 'courses_disciplines_aggregated'
  avg?: Maybe<Courses_Disciplines_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Disciplines_Aggregated_Fields>
  count?: Maybe<Courses_Disciplines_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Disciplines_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Disciplines_Aggregated_Fields>
  min?: Maybe<Courses_Disciplines_Aggregated_Fields>
  sum?: Maybe<Courses_Disciplines_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Disciplines_Aggregated_Fields>
}

export type Courses_Disciplines_Aggregated_Count = {
  __typename?: 'courses_disciplines_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  disciplines_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Disciplines_Aggregated_Fields = {
  __typename?: 'courses_disciplines_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  disciplines_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Disciplines_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Disciplines_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Disciplines_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  disciplines_id?: InputMaybe<Disciplines_Filter>
  id?: InputMaybe<Number_Filter_Operators>
}

export type Courses_Disciplines_Mutated = {
  __typename?: 'courses_disciplines_mutated'
  data?: Maybe<Courses_Disciplines>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Filter>>>
  application_date?: InputMaybe<Date_Filter_Operators>
  application_date_func?: InputMaybe<Date_Function_Filter_Operators>
  average_price?: InputMaybe<String_Filter_Operators>
  bilinguals_id?: InputMaybe<Bilinguals_Filter>
  campuses_courses?: InputMaybe<Campuses_Courses_Filter>
  campuses_courses_func?: InputMaybe<Count_Function_Filter_Operators>
  careers_list?: InputMaybe<String_Filter_Operators>
  careers_list_func?: InputMaybe<Count_Function_Filter_Operators>
  categories?: InputMaybe<Courses_Category_Relationships_Filter>
  categories_func?: InputMaybe<Count_Function_Filter_Operators>
  course_language?: InputMaybe<Courses_Languages_Format_Filter>
  course_language_func?: InputMaybe<Count_Function_Filter_Operators>
  course_trans?: InputMaybe<Courses_Trans_Filter>
  course_trans_func?: InputMaybe<Count_Function_Filter_Operators>
  degree_id?: InputMaybe<Number_Filter_Operators>
  degree_type?: InputMaybe<String_Filter_Operators>
  duration?: InputMaybe<String_Filter_Operators>
  duration_class?: InputMaybe<String_Filter_Operators>
  ects?: InputMaybe<Number_Filter_Operators>
  end_date?: InputMaybe<Date_Filter_Operators>
  end_date_func?: InputMaybe<Date_Function_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  id_mp?: InputMaybe<String_Filter_Operators>
  images?: InputMaybe<String_Filter_Operators>
  institutions?: InputMaybe<Joininstitutioncourse_Filter>
  institutions_func?: InputMaybe<Count_Function_Filter_Operators>
  is_dual?: InputMaybe<Boolean_Filter_Operators>
  is_official?: InputMaybe<Boolean_Filter_Operators>
  is_on_demand?: InputMaybe<Boolean_Filter_Operators>
  learning_format_id?: InputMaybe<Courses_Learning_Format_Filter>
  learning_format_id_func?: InputMaybe<Count_Function_Filter_Operators>
  learning_pace_id?: InputMaybe<Courses_Learning_Pace_Filter>
  learning_pace_id_func?: InputMaybe<Count_Function_Filter_Operators>
  main_taxonomy?: InputMaybe<Main_Taxonomy_Courses_Filter>
  main_taxonomy_func?: InputMaybe<Count_Function_Filter_Operators>
  meta_tags?: InputMaybe<String_Filter_Operators>
  meta_tags_func?: InputMaybe<Count_Function_Filter_Operators>
  official_data_source?: InputMaybe<String_Filter_Operators>
  places_available?: InputMaybe<Number_Filter_Operators>
  profiles?: InputMaybe<Profiles_Filter>
  profiles_func?: InputMaybe<Count_Function_Filter_Operators>
  start_date?: InputMaybe<Date_Filter_Operators>
  start_date_func?: InputMaybe<Date_Function_Filter_Operators>
  tuition_price?: InputMaybe<String_Filter_Operators>
  tuition_price_func?: InputMaybe<Count_Function_Filter_Operators>
  type?: InputMaybe<String_Filter_Operators>
  url?: InputMaybe<String_Filter_Operators>
  videos?: InputMaybe<String_Filter_Operators>
}

export type Courses_Languages_Format = {
  __typename?: 'courses_languages_format'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  languages_format_id?: Maybe<Languages_Format>
}

export type Courses_Languages_FormatCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Languages_FormatLanguages_Format_IdArgs = {
  filter?: InputMaybe<Languages_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Languages_Format_Aggregated = {
  __typename?: 'courses_languages_format_aggregated'
  avg?: Maybe<Courses_Languages_Format_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Languages_Format_Aggregated_Fields>
  count?: Maybe<Courses_Languages_Format_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Languages_Format_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Languages_Format_Aggregated_Fields>
  min?: Maybe<Courses_Languages_Format_Aggregated_Fields>
  sum?: Maybe<Courses_Languages_Format_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Languages_Format_Aggregated_Fields>
}

export type Courses_Languages_Format_Aggregated_Count = {
  __typename?: 'courses_languages_format_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  languages_format_id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Languages_Format_Aggregated_Fields = {
  __typename?: 'courses_languages_format_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  languages_format_id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Languages_Format_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Languages_Format_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Languages_Format_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
  languages_format_id?: InputMaybe<Languages_Format_Filter>
}

export type Courses_Languages_Format_Mutated = {
  __typename?: 'courses_languages_format_mutated'
  data?: Maybe<Courses_Languages_Format>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Learning_Format = {
  __typename?: 'courses_learning_format'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  learning_format_id?: Maybe<Learning_Format>
}

export type Courses_Learning_FormatCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Learning_FormatLearning_Format_IdArgs = {
  filter?: InputMaybe<Learning_Format_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Learning_Format_Aggregated = {
  __typename?: 'courses_learning_format_aggregated'
  avg?: Maybe<Courses_Learning_Format_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Learning_Format_Aggregated_Fields>
  count?: Maybe<Courses_Learning_Format_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Learning_Format_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Learning_Format_Aggregated_Fields>
  min?: Maybe<Courses_Learning_Format_Aggregated_Fields>
  sum?: Maybe<Courses_Learning_Format_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Learning_Format_Aggregated_Fields>
}

export type Courses_Learning_Format_Aggregated_Count = {
  __typename?: 'courses_learning_format_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  learning_format_id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Learning_Format_Aggregated_Fields = {
  __typename?: 'courses_learning_format_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  learning_format_id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Learning_Format_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Learning_Format_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Learning_Format_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
  learning_format_id?: InputMaybe<Learning_Format_Filter>
}

export type Courses_Learning_Format_Mutated = {
  __typename?: 'courses_learning_format_mutated'
  data?: Maybe<Courses_Learning_Format>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Learning_Pace = {
  __typename?: 'courses_learning_pace'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  learning_pace_id?: Maybe<Learning_Pace>
}

export type Courses_Learning_PaceCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Learning_PaceLearning_Pace_IdArgs = {
  filter?: InputMaybe<Learning_Pace_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Learning_Pace_Aggregated = {
  __typename?: 'courses_learning_pace_aggregated'
  avg?: Maybe<Courses_Learning_Pace_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Learning_Pace_Aggregated_Fields>
  count?: Maybe<Courses_Learning_Pace_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Learning_Pace_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Learning_Pace_Aggregated_Fields>
  min?: Maybe<Courses_Learning_Pace_Aggregated_Fields>
  sum?: Maybe<Courses_Learning_Pace_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Learning_Pace_Aggregated_Fields>
}

export type Courses_Learning_Pace_Aggregated_Count = {
  __typename?: 'courses_learning_pace_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  learning_pace_id?: Maybe<Scalars['Int']['output']>
}

export type Courses_Learning_Pace_Aggregated_Fields = {
  __typename?: 'courses_learning_pace_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  learning_pace_id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Learning_Pace_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Learning_Pace_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Learning_Pace_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
  learning_pace_id?: InputMaybe<Learning_Pace_Filter>
}

export type Courses_Learning_Pace_Mutated = {
  __typename?: 'courses_learning_pace_mutated'
  data?: Maybe<Courses_Learning_Pace>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Mutated = {
  __typename?: 'courses_mutated'
  data?: Maybe<Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Courses_Trans = {
  __typename?: 'courses_trans'
  admissions?: Maybe<Scalars['String']['output']>
  application_date?: Maybe<Scalars['Date']['output']>
  application_date_func?: Maybe<Date_Functions>
  career_opportunities?: Maybe<Scalars['String']['output']>
  commercial_name?: Maybe<Scalars['String']['output']>
  course_id?: Maybe<Courses>
  course_structure?: Maybe<Scalars['JSON']['output']>
  course_structure_func?: Maybe<Count_Functions>
  course_syllabus?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  format_schedules?: Maybe<Scalars['String']['output']>
  header_scholarships?: Maybe<Scalars['String']['output']>
  header_title?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  info_blocks?: Maybe<Scalars['JSON']['output']>
  info_blocks_func?: Maybe<Count_Functions>
  info_header?: Maybe<Scalars['String']['output']>
  intro?: Maybe<Scalars['String']['output']>
  language_id?: Maybe<Languages>
  methodology?: Maybe<Scalars['String']['output']>
  pricing?: Maybe<Scalars['String']['output']>
  reason_header?: Maybe<Scalars['String']['output']>
  requirements?: Maybe<Scalars['String']['output']>
  schedules?: Maybe<Scalars['String']['output']>
  standsfor?: Maybe<Scalars['JSON']['output']>
  standsfor_func?: Maybe<Count_Functions>
  start_date?: Maybe<Scalars['Date']['output']>
  start_date_func?: Maybe<Date_Functions>
  title_career_opportunities?: Maybe<Scalars['String']['output']>
  tuition_price_comments?: Maybe<Scalars['String']['output']>
}

export type Courses_TransCourse_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_TransLanguage_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Courses_Trans_Aggregated = {
  __typename?: 'courses_trans_aggregated'
  avg?: Maybe<Courses_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Courses_Trans_Aggregated_Fields>
  count?: Maybe<Courses_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Courses_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Courses_Trans_Aggregated_Fields>
  min?: Maybe<Courses_Trans_Aggregated_Fields>
  sum?: Maybe<Courses_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Courses_Trans_Aggregated_Fields>
}

export type Courses_Trans_Aggregated_Count = {
  __typename?: 'courses_trans_aggregated_count'
  admissions?: Maybe<Scalars['Int']['output']>
  application_date?: Maybe<Scalars['Int']['output']>
  career_opportunities?: Maybe<Scalars['Int']['output']>
  commercial_name?: Maybe<Scalars['Int']['output']>
  course_id?: Maybe<Scalars['Int']['output']>
  course_structure?: Maybe<Scalars['Int']['output']>
  course_syllabus?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  format_schedules?: Maybe<Scalars['Int']['output']>
  header_scholarships?: Maybe<Scalars['Int']['output']>
  header_title?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  info_blocks?: Maybe<Scalars['Int']['output']>
  info_header?: Maybe<Scalars['Int']['output']>
  intro?: Maybe<Scalars['Int']['output']>
  language_id?: Maybe<Scalars['Int']['output']>
  methodology?: Maybe<Scalars['Int']['output']>
  pricing?: Maybe<Scalars['Int']['output']>
  reason_header?: Maybe<Scalars['Int']['output']>
  requirements?: Maybe<Scalars['Int']['output']>
  schedules?: Maybe<Scalars['Int']['output']>
  standsfor?: Maybe<Scalars['Int']['output']>
  start_date?: Maybe<Scalars['Int']['output']>
  title_career_opportunities?: Maybe<Scalars['Int']['output']>
  tuition_price_comments?: Maybe<Scalars['Int']['output']>
}

export type Courses_Trans_Aggregated_Fields = {
  __typename?: 'courses_trans_aggregated_fields'
  course_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  language_id?: Maybe<Scalars['Float']['output']>
}

export type Courses_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Courses_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Courses_Trans_Filter>>>
  admissions?: InputMaybe<String_Filter_Operators>
  application_date?: InputMaybe<Date_Filter_Operators>
  application_date_func?: InputMaybe<Date_Function_Filter_Operators>
  career_opportunities?: InputMaybe<String_Filter_Operators>
  commercial_name?: InputMaybe<String_Filter_Operators>
  course_id?: InputMaybe<Courses_Filter>
  course_structure?: InputMaybe<String_Filter_Operators>
  course_structure_func?: InputMaybe<Count_Function_Filter_Operators>
  course_syllabus?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  format_schedules?: InputMaybe<String_Filter_Operators>
  header_scholarships?: InputMaybe<String_Filter_Operators>
  header_title?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  info_blocks?: InputMaybe<String_Filter_Operators>
  info_blocks_func?: InputMaybe<Count_Function_Filter_Operators>
  info_header?: InputMaybe<String_Filter_Operators>
  intro?: InputMaybe<String_Filter_Operators>
  language_id?: InputMaybe<Languages_Filter>
  methodology?: InputMaybe<String_Filter_Operators>
  pricing?: InputMaybe<String_Filter_Operators>
  reason_header?: InputMaybe<String_Filter_Operators>
  requirements?: InputMaybe<String_Filter_Operators>
  schedules?: InputMaybe<String_Filter_Operators>
  standsfor?: InputMaybe<String_Filter_Operators>
  standsfor_func?: InputMaybe<Count_Function_Filter_Operators>
  start_date?: InputMaybe<Date_Filter_Operators>
  start_date_func?: InputMaybe<Date_Function_Filter_Operators>
  title_career_opportunities?: InputMaybe<String_Filter_Operators>
  tuition_price_comments?: InputMaybe<String_Filter_Operators>
}

export type Courses_Trans_Mutated = {
  __typename?: 'courses_trans_mutated'
  data?: Maybe<Courses_Trans>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Create_Allowed_Setting_Value_Input = {
  caption?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  item_value?: InputMaybe<Scalars['String']['input']>
  settings_id?: InputMaybe<Create_Settings_Input>
}

export type Create_Bilinguals_Input = {
  id: Scalars['ID']['input']
  name: Scalars['String']['input']
}

export type Create_Campuses_Courses_Input = {
  campuses_id?: InputMaybe<Create_Campuses_Input>
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Create_Campuses_Input = {
  campuses_trans?: InputMaybe<Array<InputMaybe<Create_Campuses_Trans_Input>>>
  city?: InputMaybe<Scalars['String']['input']>
  country?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  institutions_id?: InputMaybe<Create_Institutions_Input>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  street_address?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Create_Campuses_Trans_Input = {
  campuses_id?: InputMaybe<Create_Campuses_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  intro?: InputMaybe<Scalars['String']['input']>
  language_id?: InputMaybe<Create_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Categories_Input = {
  category_trans?: InputMaybe<Array<InputMaybe<Create_Categories_Trans_Input>>>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Create_Categories_Trans_Input = {
  category_id?: InputMaybe<Create_Categories_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Create_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  name_normalized?: InputMaybe<Scalars['String']['input']>
}

export type Create_Category_Courses_Input = {
  category_courses?: InputMaybe<Array<InputMaybe<Create_Category_Courses_Input>>>
  category_courses_id?: InputMaybe<Create_Category_Courses_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name: Scalars['String']['input']
}

export type Create_Category_Posts_Input = {
  category_posts_id?: InputMaybe<Create_Category_Posts_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Category_Relationships_Input = {
  child_id?: InputMaybe<Create_Categories_Input>
  courses?: InputMaybe<Array<InputMaybe<Create_Courses_Category_Relationships_Input>>>
  id?: InputMaybe<Scalars['ID']['input']>
  parent_id?: InputMaybe<Create_Categories_Input>
}

export type Create_Course_Languages_Input = {
  direction?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Courses_Category_Courses_Input = {
  category_courses_id?: InputMaybe<Create_Category_Courses_Input>
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Create_Courses_Category_Relationships_Input = {
  category_relationships_id?: InputMaybe<Create_Category_Relationships_Input>
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Create_Courses_Disciplines_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  disciplines_id?: InputMaybe<Create_Disciplines_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Create_Courses_Input = {
  application_date?: InputMaybe<Scalars['Date']['input']>
  average_price?: InputMaybe<Scalars['String']['input']>
  bilinguals_id?: InputMaybe<Create_Bilinguals_Input>
  campuses_courses?: InputMaybe<Array<InputMaybe<Create_Campuses_Courses_Input>>>
  careers_list?: InputMaybe<Scalars['JSON']['input']>
  categories?: InputMaybe<Array<InputMaybe<Create_Courses_Category_Relationships_Input>>>
  course_language?: InputMaybe<Array<InputMaybe<Create_Courses_Languages_Format_Input>>>
  course_trans?: InputMaybe<Array<InputMaybe<Create_Courses_Trans_Input>>>
  degree_id?: InputMaybe<Scalars['Int']['input']>
  degree_type?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['String']['input']>
  duration_class?: InputMaybe<Scalars['String']['input']>
  ects?: InputMaybe<Scalars['Int']['input']>
  end_date?: InputMaybe<Scalars['Date']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  id_mp?: InputMaybe<Scalars['String']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  institutions?: InputMaybe<Array<InputMaybe<Create_Joininstitutioncourse_Input>>>
  is_dual?: InputMaybe<Scalars['Boolean']['input']>
  is_official?: InputMaybe<Scalars['Boolean']['input']>
  is_on_demand?: InputMaybe<Scalars['Boolean']['input']>
  learning_format_id?: InputMaybe<Array<InputMaybe<Create_Courses_Learning_Format_Input>>>
  learning_pace_id?: InputMaybe<Array<InputMaybe<Create_Courses_Learning_Pace_Input>>>
  main_taxonomy?: InputMaybe<Array<InputMaybe<Create_Main_Taxonomy_Courses_Input>>>
  meta_tags?: InputMaybe<Scalars['JSON']['input']>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  places_available?: InputMaybe<Scalars['Int']['input']>
  profiles?: InputMaybe<Array<InputMaybe<Create_Profiles_Input>>>
  start_date?: InputMaybe<Scalars['Date']['input']>
  tuition_price?: InputMaybe<Scalars['JSON']['input']>
  type: Scalars['String']['input']
  url?: InputMaybe<Scalars['String']['input']>
  videos?: InputMaybe<Scalars['String']['input']>
}

export type Create_Courses_Languages_Format_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  languages_format_id?: InputMaybe<Create_Languages_Format_Input>
}

export type Create_Courses_Learning_Format_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  learning_format_id?: InputMaybe<Create_Learning_Format_Input>
}

export type Create_Courses_Learning_Pace_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  learning_pace_id?: InputMaybe<Create_Learning_Pace_Input>
}

export type Create_Courses_Trans_Input = {
  admissions?: InputMaybe<Scalars['String']['input']>
  application_date?: InputMaybe<Scalars['Date']['input']>
  career_opportunities?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  course_id?: InputMaybe<Create_Courses_Input>
  course_structure?: InputMaybe<Scalars['JSON']['input']>
  course_syllabus?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  format_schedules?: InputMaybe<Scalars['String']['input']>
  header_scholarships?: InputMaybe<Scalars['String']['input']>
  header_title?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  info_blocks?: InputMaybe<Scalars['JSON']['input']>
  info_header?: InputMaybe<Scalars['String']['input']>
  intro?: InputMaybe<Scalars['String']['input']>
  language_id?: InputMaybe<Create_Languages_Input>
  methodology?: InputMaybe<Scalars['String']['input']>
  pricing?: InputMaybe<Scalars['String']['input']>
  reason_header?: InputMaybe<Scalars['String']['input']>
  requirements?: InputMaybe<Scalars['String']['input']>
  schedules?: InputMaybe<Scalars['String']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
  start_date?: InputMaybe<Scalars['Date']['input']>
  title_career_opportunities?: InputMaybe<Scalars['String']['input']>
  tuition_price_comments?: InputMaybe<Scalars['String']['input']>
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

export type Create_Disciplines_Input = {
  courses?: InputMaybe<Array<InputMaybe<Create_Courses_Disciplines_Input>>>
  discipline_trans?: InputMaybe<Array<InputMaybe<Create_Disciplines_Trans_Input>>>
  discipline_visualization?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['ID']['input']
  menu: Scalars['String']['input']
  specialization_level1_visualization?: InputMaybe<Scalars['Boolean']['input']>
  specialization_level2_visualization?: InputMaybe<Scalars['Boolean']['input']>
  visualization?: InputMaybe<Scalars['Int']['input']>
}

export type Create_Disciplines_Trans_Input = {
  discipline: Scalars['String']['input']
  discipline_id?: InputMaybe<Create_Disciplines_Input>
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<Create_Languages_Input>
  specialization_level1?: InputMaybe<Scalars['String']['input']>
  specialization_level2?: InputMaybe<Scalars['String']['input']>
}

export type Create_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Create_Folders_Input>
}

export type Create_Institutions_Input = {
  acronym?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  courses?: InputMaybe<Array<InputMaybe<Create_Joininstitutioncourse_Input>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_mp: Scalars['String']['input']
  images?: InputMaybe<Scalars['String']['input']>
  institution_campuses?: InputMaybe<Array<InputMaybe<Create_Campuses_Input>>>
  institutions_scholarships_courses?: InputMaybe<Array<InputMaybe<Create_Institutions_Scholarships_Courses_Input>>>
  institutions_trans?: InputMaybe<Array<InputMaybe<Create_Institutions_Trans_Input>>>
  logo?: InputMaybe<Scalars['String']['input']>
  main_image?: InputMaybe<Scalars['String']['input']>
  meta_type_tags?: InputMaybe<Array<InputMaybe<Create_Institutions_Tag_Institutions_Input>>>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  ownership?: InputMaybe<Scalars['String']['input']>
  top_masters?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  videos?: InputMaybe<Scalars['String']['input']>
}

export type Create_Institutions_Scholarships_Courses_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_id?: InputMaybe<Create_Institutions_Input>
  scholarships_id?: InputMaybe<Create_Scholarships_Input>
}

export type Create_Institutions_Tag_Institutions_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_id?: InputMaybe<Create_Institutions_Input>
  tag_institutions_id?: InputMaybe<Create_Tag_Institutions_Input>
}

export type Create_Institutions_Trans_Input = {
  commercial_name?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  header_courses?: InputMaybe<Scalars['String']['input']>
  header_details?: InputMaybe<Scalars['JSON']['input']>
  header_rank_and_rec?: InputMaybe<Scalars['String']['input']>
  header_scholarships?: InputMaybe<Scalars['String']['input']>
  header_standsfor?: InputMaybe<Scalars['String']['input']>
  header_title?: InputMaybe<Scalars['String']['input']>
  header_type_and_taxonomy?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  institution_id?: InputMaybe<Create_Institutions_Input>
  intro?: InputMaybe<Scalars['String']['input']>
  language_id?: InputMaybe<Create_Languages_Input>
  rank_and_rec?: InputMaybe<Scalars['JSON']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
}

export type Create_Joininstitutioncourse_Input = {
  course_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  institution_id?: InputMaybe<Create_Institutions_Input>
}

export type Create_Languages_Format_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language_id?: InputMaybe<Create_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Languages_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Learning_Format_Input = {
  format_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Create_Learning_Pace_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  pace_name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Main_Taxonomy_Courses_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  main_taxonomy_id?: InputMaybe<Create_Main_Taxonomy_Input>
}

export type Create_Main_Taxonomy_Input = {
  courses?: InputMaybe<Array<InputMaybe<Create_Main_Taxonomy_Courses_Input>>>
  discipline?: InputMaybe<Create_Taxonomy_Input>
  discipline_visualization?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  menu?: InputMaybe<Scalars['String']['input']>
  specialization_level1?: InputMaybe<Create_Taxonomy_Level1_Input>
  specialization_level1_visualization?: InputMaybe<Scalars['Boolean']['input']>
  specialization_level2?: InputMaybe<Create_Taxonomy_Level2_Input>
  specialization_level2_visualization?: InputMaybe<Scalars['Boolean']['input']>
}

export type Create_Menu_Items_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  menu_item_id?: InputMaybe<Create_Menu_Items_Input>
  menu_item_relationship_id?: InputMaybe<Scalars['Int']['input']>
  menu_order?: InputMaybe<Scalars['Int']['input']>
  menus_id?: InputMaybe<Create_Menus_Input>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type Create_Menus_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Pages_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type Create_Posts_Category_Posts_Input = {
  category_posts_id?: InputMaybe<Create_Category_Posts_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  posts_id?: InputMaybe<Create_Posts_Input>
}

export type Create_Posts_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  excerpt?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type Create_Posts_Tag_Posts_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  posts_id?: InputMaybe<Create_Posts_Input>
  tag_posts_id?: InputMaybe<Create_Tag_Posts_Input>
}

export type Create_Profiles_Input = {
  content_title?: InputMaybe<Scalars['String']['input']>
  courses_id?: InputMaybe<Create_Courses_Input>
  data?: InputMaybe<Scalars['JSON']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  language_id?: InputMaybe<Create_Languages_Input>
  students?: InputMaybe<Scalars['JSON']['input']>
  target?: InputMaybe<Scalars['JSON']['input']>
}

export type Create_Questions_Input = {
  close_question?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  languages_id?: InputMaybe<Create_Languages_Input>
  option_answer?: InputMaybe<Scalars['String']['input']>
  option_answers?: InputMaybe<Scalars['JSON']['input']>
  text?: InputMaybe<Scalars['String']['input']>
}

export type Create_Reports_Input = {
  courses_id?: InputMaybe<Create_Courses_Input>
  data?: InputMaybe<Scalars['JSON']['input']>
  date?: InputMaybe<Scalars['Date']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_id?: InputMaybe<Create_Institutions_Input>
  internal_code?: InputMaybe<Scalars['String']['input']>
  is_validated?: InputMaybe<Scalars['Boolean']['input']>
  o_languages_id?: InputMaybe<Create_Languages_Input>
  users_id?: InputMaybe<Create_Users_Input>
}

export type Create_Reports_Questions_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  questions_id?: InputMaybe<Create_Questions_Input>
  reports_id?: InputMaybe<Create_Reports_Input>
}

export type Create_Scholarships_Input = {
  academic_course?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['JSON']['input']>
  enum?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_scholarships_courses?: InputMaybe<Array<InputMaybe<Create_Institutions_Scholarships_Courses_Input>>>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  languages_id?: InputMaybe<Create_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Create_Seo_Template_Block_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  seo_template_id?: InputMaybe<Create_Seo_Template_Input>
}

export type Create_Seo_Template_Input = {
  directus_files_id?: InputMaybe<Create_Directus_Files_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  meta_description?: InputMaybe<Scalars['String']['input']>
  meta_title?: InputMaybe<Scalars['String']['input']>
}

export type Create_Settings_Input = {
  constrained?: InputMaybe<Scalars['Boolean']['input']>
  data_type?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Create_Tag_Courses_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name: Scalars['String']['input']
  tag_courses_id?: InputMaybe<Create_Tag_Courses_Input>
}

export type Create_Tag_Institutions_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Tag_Posts_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Create_Taxonomy_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  taxonomy_trans?: InputMaybe<Array<InputMaybe<Create_Taxonomy_Trans_Input>>>
}

export type Create_Taxonomy_Level1_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  taxonomy_level1_trans?: InputMaybe<Array<InputMaybe<Create_Taxonomy_Level1_Trans_Input>>>
}

export type Create_Taxonomy_Level1_Trans_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Create_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  taxonomy_level1_id?: InputMaybe<Create_Taxonomy_Level1_Input>
}

export type Create_Taxonomy_Level2_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  taxonomy_level2_trans?: InputMaybe<Array<InputMaybe<Create_Taxonomy_Level2_Trans_Input>>>
}

export type Create_Taxonomy_Level2_Trans_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Create_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  taxonomy_level2_id?: InputMaybe<Create_Taxonomy_Level2_Input>
}

export type Create_Taxonomy_Trans_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Create_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  taxonomy_id?: InputMaybe<Create_Taxonomy_Input>
}

export type Create_User_Setting_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
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
  id?: InputMaybe<Scalars['ID']['input']>
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

export type Disciplines = {
  __typename?: 'disciplines'
  courses?: Maybe<Array<Maybe<Courses_Disciplines>>>
  discipline_trans?: Maybe<Array<Maybe<Disciplines_Trans>>>
  discipline_trans_func?: Maybe<Count_Functions>
  discipline_visualization?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  menu: Scalars['String']['output']
  specialization_level1_visualization?: Maybe<Scalars['Boolean']['output']>
  specialization_level2_visualization?: Maybe<Scalars['Boolean']['output']>
  visualization?: Maybe<Scalars['Int']['output']>
}

export type DisciplinesCoursesArgs = {
  filter?: InputMaybe<Courses_Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type DisciplinesDiscipline_TransArgs = {
  filter?: InputMaybe<Disciplines_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Disciplines_Aggregated = {
  __typename?: 'disciplines_aggregated'
  avg?: Maybe<Disciplines_Aggregated_Fields>
  avgDistinct?: Maybe<Disciplines_Aggregated_Fields>
  count?: Maybe<Disciplines_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Disciplines_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Disciplines_Aggregated_Fields>
  min?: Maybe<Disciplines_Aggregated_Fields>
  sum?: Maybe<Disciplines_Aggregated_Fields>
  sumDistinct?: Maybe<Disciplines_Aggregated_Fields>
}

export type Disciplines_Aggregated_Count = {
  __typename?: 'disciplines_aggregated_count'
  discipline_trans?: Maybe<Scalars['Int']['output']>
  discipline_visualization?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  menu?: Maybe<Scalars['Int']['output']>
  specialization_level1_visualization?: Maybe<Scalars['Int']['output']>
  specialization_level2_visualization?: Maybe<Scalars['Int']['output']>
  visualization?: Maybe<Scalars['Int']['output']>
}

export type Disciplines_Aggregated_Fields = {
  __typename?: 'disciplines_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  visualization?: Maybe<Scalars['Float']['output']>
}

export type Disciplines_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Disciplines_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Disciplines_Filter>>>
  courses?: InputMaybe<Courses_Disciplines_Filter>
  discipline_trans?: InputMaybe<Disciplines_Trans_Filter>
  discipline_trans_func?: InputMaybe<Count_Function_Filter_Operators>
  discipline_visualization?: InputMaybe<Boolean_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  menu?: InputMaybe<String_Filter_Operators>
  specialization_level1_visualization?: InputMaybe<Boolean_Filter_Operators>
  specialization_level2_visualization?: InputMaybe<Boolean_Filter_Operators>
  visualization?: InputMaybe<Number_Filter_Operators>
}

export type Disciplines_Mutated = {
  __typename?: 'disciplines_mutated'
  data?: Maybe<Disciplines>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Disciplines_Trans = {
  __typename?: 'disciplines_trans'
  discipline: Scalars['String']['output']
  discipline_id?: Maybe<Disciplines>
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  language?: Maybe<Languages>
  specialization_level1?: Maybe<Scalars['String']['output']>
  specialization_level2?: Maybe<Scalars['String']['output']>
}

export type Disciplines_TransDiscipline_IdArgs = {
  filter?: InputMaybe<Disciplines_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Disciplines_TransLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Disciplines_Trans_Aggregated = {
  __typename?: 'disciplines_trans_aggregated'
  avg?: Maybe<Disciplines_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Disciplines_Trans_Aggregated_Fields>
  count?: Maybe<Disciplines_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Disciplines_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Disciplines_Trans_Aggregated_Fields>
  min?: Maybe<Disciplines_Trans_Aggregated_Fields>
  sum?: Maybe<Disciplines_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Disciplines_Trans_Aggregated_Fields>
}

export type Disciplines_Trans_Aggregated_Count = {
  __typename?: 'disciplines_trans_aggregated_count'
  discipline?: Maybe<Scalars['Int']['output']>
  discipline_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  keyword?: Maybe<Scalars['Int']['output']>
  language?: Maybe<Scalars['Int']['output']>
  specialization_level1?: Maybe<Scalars['Int']['output']>
  specialization_level2?: Maybe<Scalars['Int']['output']>
}

export type Disciplines_Trans_Aggregated_Fields = {
  __typename?: 'disciplines_trans_aggregated_fields'
  discipline_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  language?: Maybe<Scalars['Float']['output']>
}

export type Disciplines_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Disciplines_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Disciplines_Trans_Filter>>>
  discipline?: InputMaybe<String_Filter_Operators>
  discipline_id?: InputMaybe<Disciplines_Filter>
  id?: InputMaybe<Number_Filter_Operators>
  keyword?: InputMaybe<String_Filter_Operators>
  language?: InputMaybe<Languages_Filter>
  specialization_level1?: InputMaybe<String_Filter_Operators>
  specialization_level2?: InputMaybe<String_Filter_Operators>
}

export type Disciplines_Trans_Mutated = {
  __typename?: 'disciplines_trans_mutated'
  data?: Maybe<Disciplines_Trans>
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
  avg?: Maybe<Folders_Aggregated_Fields>
  avgDistinct?: Maybe<Folders_Aggregated_Fields>
  count?: Maybe<Folders_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Folders_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Folders_Aggregated_Fields>
  min?: Maybe<Folders_Aggregated_Fields>
  sum?: Maybe<Folders_Aggregated_Fields>
  sumDistinct?: Maybe<Folders_Aggregated_Fields>
}

export type Folders_Aggregated_Count = {
  __typename?: 'folders_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  parent?: Maybe<Scalars['Int']['output']>
}

export type Folders_Aggregated_Fields = {
  __typename?: 'folders_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  parent?: Maybe<Scalars['Float']['output']>
}

export type Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Folders_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Folders_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
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
  courses?: Maybe<Array<Maybe<Joininstitutioncourse>>>
  courses_func?: Maybe<Count_Functions>
  id: Scalars['ID']['output']
  id_mp: Scalars['String']['output']
  images?: Maybe<Scalars['String']['output']>
  institution_campuses?: Maybe<Array<Maybe<Campuses>>>
  institution_campuses_func?: Maybe<Count_Functions>
  institutions_scholarships_courses?: Maybe<Array<Maybe<Institutions_Scholarships_Courses>>>
  institutions_scholarships_courses_func?: Maybe<Count_Functions>
  institutions_trans?: Maybe<Array<Maybe<Institutions_Trans>>>
  institutions_trans_func?: Maybe<Count_Functions>
  logo?: Maybe<Scalars['String']['output']>
  main_image?: Maybe<Scalars['String']['output']>
  meta_type_tags?: Maybe<Array<Maybe<Institutions_Tag_Institutions>>>
  meta_type_tags_func?: Maybe<Count_Functions>
  official_data_source?: Maybe<Scalars['String']['output']>
  ownership?: Maybe<Scalars['String']['output']>
  top_masters?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  videos?: Maybe<Scalars['String']['output']>
}

export type InstitutionsCoursesArgs = {
  filter?: InputMaybe<Joininstitutioncourse_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type InstitutionsInstitution_CampusesArgs = {
  filter?: InputMaybe<Campuses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type InstitutionsInstitutions_Scholarships_CoursesArgs = {
  filter?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type InstitutionsInstitutions_TransArgs = {
  filter?: InputMaybe<Institutions_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type InstitutionsMeta_Type_TagsArgs = {
  filter?: InputMaybe<Institutions_Tag_Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_Aggregated = {
  __typename?: 'institutions_aggregated'
  avg?: Maybe<Institutions_Aggregated_Fields>
  avgDistinct?: Maybe<Institutions_Aggregated_Fields>
  count?: Maybe<Institutions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Institutions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Institutions_Aggregated_Fields>
  min?: Maybe<Institutions_Aggregated_Fields>
  sum?: Maybe<Institutions_Aggregated_Fields>
  sumDistinct?: Maybe<Institutions_Aggregated_Fields>
}

export type Institutions_Aggregated_Count = {
  __typename?: 'institutions_aggregated_count'
  acronym?: Maybe<Scalars['Int']['output']>
  commercial_name?: Maybe<Scalars['Int']['output']>
  courses?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  id_mp?: Maybe<Scalars['Int']['output']>
  images?: Maybe<Scalars['Int']['output']>
  institution_campuses?: Maybe<Scalars['Int']['output']>
  institutions_scholarships_courses?: Maybe<Scalars['Int']['output']>
  institutions_trans?: Maybe<Scalars['Int']['output']>
  logo?: Maybe<Scalars['Int']['output']>
  main_image?: Maybe<Scalars['Int']['output']>
  meta_type_tags?: Maybe<Scalars['Int']['output']>
  official_data_source?: Maybe<Scalars['Int']['output']>
  ownership?: Maybe<Scalars['Int']['output']>
  top_masters?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['Int']['output']>
  videos?: Maybe<Scalars['Int']['output']>
}

export type Institutions_Aggregated_Fields = {
  __typename?: 'institutions_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Institutions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Institutions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Institutions_Filter>>>
  acronym?: InputMaybe<String_Filter_Operators>
  commercial_name?: InputMaybe<String_Filter_Operators>
  courses?: InputMaybe<Joininstitutioncourse_Filter>
  courses_func?: InputMaybe<Count_Function_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  id_mp?: InputMaybe<String_Filter_Operators>
  images?: InputMaybe<String_Filter_Operators>
  institution_campuses?: InputMaybe<Campuses_Filter>
  institution_campuses_func?: InputMaybe<Count_Function_Filter_Operators>
  institutions_scholarships_courses?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  institutions_scholarships_courses_func?: InputMaybe<Count_Function_Filter_Operators>
  institutions_trans?: InputMaybe<Institutions_Trans_Filter>
  institutions_trans_func?: InputMaybe<Count_Function_Filter_Operators>
  logo?: InputMaybe<String_Filter_Operators>
  main_image?: InputMaybe<String_Filter_Operators>
  meta_type_tags?: InputMaybe<Institutions_Tag_Institutions_Filter>
  meta_type_tags_func?: InputMaybe<Count_Function_Filter_Operators>
  official_data_source?: InputMaybe<String_Filter_Operators>
  ownership?: InputMaybe<String_Filter_Operators>
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
  avg?: Maybe<Institutions_Scholarships_Courses_Aggregated_Fields>
  avgDistinct?: Maybe<Institutions_Scholarships_Courses_Aggregated_Fields>
  count?: Maybe<Institutions_Scholarships_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Institutions_Scholarships_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Institutions_Scholarships_Courses_Aggregated_Fields>
  min?: Maybe<Institutions_Scholarships_Courses_Aggregated_Fields>
  sum?: Maybe<Institutions_Scholarships_Courses_Aggregated_Fields>
  sumDistinct?: Maybe<Institutions_Scholarships_Courses_Aggregated_Fields>
}

export type Institutions_Scholarships_Courses_Aggregated_Count = {
  __typename?: 'institutions_scholarships_courses_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  institutions_id?: Maybe<Scalars['Int']['output']>
  scholarships_id?: Maybe<Scalars['Int']['output']>
}

export type Institutions_Scholarships_Courses_Aggregated_Fields = {
  __typename?: 'institutions_scholarships_courses_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  institutions_id?: Maybe<Scalars['Float']['output']>
  scholarships_id?: Maybe<Scalars['Float']['output']>
}

export type Institutions_Scholarships_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Institutions_Scholarships_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Institutions_Scholarships_Courses_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
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
  id?: Maybe<Scalars['Float']['output']>
  institutions_id?: Maybe<Scalars['Float']['output']>
  tag_institutions_id?: Maybe<Scalars['Float']['output']>
}

export type Institutions_Tag_Institutions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Institutions_Tag_Institutions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Institutions_Tag_Institutions_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
  institutions_id?: InputMaybe<Institutions_Filter>
  tag_institutions_id?: InputMaybe<Tag_Institutions_Filter>
}

export type Institutions_Tag_Institutions_Mutated = {
  __typename?: 'institutions_tag_institutions_mutated'
  data?: Maybe<Institutions_Tag_Institutions>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Institutions_Trans = {
  __typename?: 'institutions_trans'
  commercial_name?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  header_courses?: Maybe<Scalars['String']['output']>
  header_details?: Maybe<Scalars['JSON']['output']>
  header_details_func?: Maybe<Count_Functions>
  header_rank_and_rec?: Maybe<Scalars['String']['output']>
  header_scholarships?: Maybe<Scalars['String']['output']>
  header_standsfor?: Maybe<Scalars['String']['output']>
  header_title?: Maybe<Scalars['String']['output']>
  header_type_and_taxonomy?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  institution_id?: Maybe<Institutions>
  intro?: Maybe<Scalars['String']['output']>
  language_id?: Maybe<Languages>
  rank_and_rec?: Maybe<Scalars['JSON']['output']>
  rank_and_rec_func?: Maybe<Count_Functions>
  standsfor?: Maybe<Scalars['JSON']['output']>
  standsfor_func?: Maybe<Count_Functions>
}

export type Institutions_TransInstitution_IdArgs = {
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_TransLanguage_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Institutions_Trans_Aggregated = {
  __typename?: 'institutions_trans_aggregated'
  avg?: Maybe<Institutions_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Institutions_Trans_Aggregated_Fields>
  count?: Maybe<Institutions_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Institutions_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Institutions_Trans_Aggregated_Fields>
  min?: Maybe<Institutions_Trans_Aggregated_Fields>
  sum?: Maybe<Institutions_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Institutions_Trans_Aggregated_Fields>
}

export type Institutions_Trans_Aggregated_Count = {
  __typename?: 'institutions_trans_aggregated_count'
  commercial_name?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  header_courses?: Maybe<Scalars['Int']['output']>
  header_details?: Maybe<Scalars['Int']['output']>
  header_rank_and_rec?: Maybe<Scalars['Int']['output']>
  header_scholarships?: Maybe<Scalars['Int']['output']>
  header_standsfor?: Maybe<Scalars['Int']['output']>
  header_title?: Maybe<Scalars['Int']['output']>
  header_type_and_taxonomy?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  institution_id?: Maybe<Scalars['Int']['output']>
  intro?: Maybe<Scalars['Int']['output']>
  language_id?: Maybe<Scalars['Int']['output']>
  rank_and_rec?: Maybe<Scalars['Int']['output']>
  standsfor?: Maybe<Scalars['Int']['output']>
}

export type Institutions_Trans_Aggregated_Fields = {
  __typename?: 'institutions_trans_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  institution_id?: Maybe<Scalars['Float']['output']>
  language_id?: Maybe<Scalars['Float']['output']>
}

export type Institutions_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Institutions_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Institutions_Trans_Filter>>>
  commercial_name?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  header_courses?: InputMaybe<String_Filter_Operators>
  header_details?: InputMaybe<String_Filter_Operators>
  header_details_func?: InputMaybe<Count_Function_Filter_Operators>
  header_rank_and_rec?: InputMaybe<String_Filter_Operators>
  header_scholarships?: InputMaybe<String_Filter_Operators>
  header_standsfor?: InputMaybe<String_Filter_Operators>
  header_title?: InputMaybe<String_Filter_Operators>
  header_type_and_taxonomy?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  institution_id?: InputMaybe<Institutions_Filter>
  intro?: InputMaybe<String_Filter_Operators>
  language_id?: InputMaybe<Languages_Filter>
  rank_and_rec?: InputMaybe<String_Filter_Operators>
  rank_and_rec_func?: InputMaybe<Count_Function_Filter_Operators>
  standsfor?: InputMaybe<String_Filter_Operators>
  standsfor_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Institutions_Trans_Mutated = {
  __typename?: 'institutions_trans_mutated'
  data?: Maybe<Institutions_Trans>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Joininstitutioncourse = {
  __typename?: 'joininstitutioncourse'
  course_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  institution_id?: Maybe<Institutions>
}

export type JoininstitutioncourseCourse_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type JoininstitutioncourseInstitution_IdArgs = {
  filter?: InputMaybe<Institutions_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Joininstitutioncourse_Aggregated = {
  __typename?: 'joininstitutioncourse_aggregated'
  avg?: Maybe<Joininstitutioncourse_Aggregated_Fields>
  avgDistinct?: Maybe<Joininstitutioncourse_Aggregated_Fields>
  count?: Maybe<Joininstitutioncourse_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Joininstitutioncourse_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Joininstitutioncourse_Aggregated_Fields>
  min?: Maybe<Joininstitutioncourse_Aggregated_Fields>
  sum?: Maybe<Joininstitutioncourse_Aggregated_Fields>
  sumDistinct?: Maybe<Joininstitutioncourse_Aggregated_Fields>
}

export type Joininstitutioncourse_Aggregated_Count = {
  __typename?: 'joininstitutioncourse_aggregated_count'
  course_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  institution_id?: Maybe<Scalars['Int']['output']>
}

export type Joininstitutioncourse_Aggregated_Fields = {
  __typename?: 'joininstitutioncourse_aggregated_fields'
  course_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  institution_id?: Maybe<Scalars['Float']['output']>
}

export type Joininstitutioncourse_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Joininstitutioncourse_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Joininstitutioncourse_Filter>>>
  course_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
  institution_id?: InputMaybe<Institutions_Filter>
}

export type Joininstitutioncourse_Mutated = {
  __typename?: 'joininstitutioncourse_mutated'
  data?: Maybe<Joininstitutioncourse>
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
  avg?: Maybe<Languages_Aggregated_Fields>
  avgDistinct?: Maybe<Languages_Aggregated_Fields>
  count?: Maybe<Languages_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Languages_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Languages_Aggregated_Fields>
  min?: Maybe<Languages_Aggregated_Fields>
  sum?: Maybe<Languages_Aggregated_Fields>
  sumDistinct?: Maybe<Languages_Aggregated_Fields>
}

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Languages_Aggregated_Fields = {
  __typename?: 'languages_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
}

export type Languages_Format = {
  __typename?: 'languages_format'
  id: Scalars['ID']['output']
  language_id?: Maybe<Languages>
  name?: Maybe<Scalars['String']['output']>
}

export type Languages_FormatLanguage_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Languages_Format_Aggregated = {
  __typename?: 'languages_format_aggregated'
  avg?: Maybe<Languages_Format_Aggregated_Fields>
  avgDistinct?: Maybe<Languages_Format_Aggregated_Fields>
  count?: Maybe<Languages_Format_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Languages_Format_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Languages_Format_Aggregated_Fields>
  min?: Maybe<Languages_Format_Aggregated_Fields>
  sum?: Maybe<Languages_Format_Aggregated_Fields>
  sumDistinct?: Maybe<Languages_Format_Aggregated_Fields>
}

export type Languages_Format_Aggregated_Count = {
  __typename?: 'languages_format_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  language_id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Languages_Format_Aggregated_Fields = {
  __typename?: 'languages_format_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  language_id?: Maybe<Scalars['Float']['output']>
}

export type Languages_Format_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Format_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Languages_Format_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
  language_id?: InputMaybe<Languages_Filter>
  name?: InputMaybe<String_Filter_Operators>
}

export type Languages_Format_Mutated = {
  __typename?: 'languages_format_mutated'
  data?: Maybe<Languages_Format>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Languages_Mutated = {
  __typename?: 'languages_mutated'
  data?: Maybe<Languages>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Learning_Format = {
  __typename?: 'learning_format'
  format_name?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
}

export type Learning_Format_Aggregated = {
  __typename?: 'learning_format_aggregated'
  avg?: Maybe<Learning_Format_Aggregated_Fields>
  avgDistinct?: Maybe<Learning_Format_Aggregated_Fields>
  count?: Maybe<Learning_Format_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Learning_Format_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Learning_Format_Aggregated_Fields>
  min?: Maybe<Learning_Format_Aggregated_Fields>
  sum?: Maybe<Learning_Format_Aggregated_Fields>
  sumDistinct?: Maybe<Learning_Format_Aggregated_Fields>
}

export type Learning_Format_Aggregated_Count = {
  __typename?: 'learning_format_aggregated_count'
  format_name?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Learning_Format_Aggregated_Fields = {
  __typename?: 'learning_format_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Learning_Format_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Learning_Format_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Learning_Format_Filter>>>
  format_name?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
}

export type Learning_Format_Mutated = {
  __typename?: 'learning_format_mutated'
  data?: Maybe<Learning_Format>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Learning_Pace = {
  __typename?: 'learning_pace'
  id: Scalars['ID']['output']
  pace_name?: Maybe<Scalars['String']['output']>
}

export type Learning_Pace_Aggregated = {
  __typename?: 'learning_pace_aggregated'
  avg?: Maybe<Learning_Pace_Aggregated_Fields>
  avgDistinct?: Maybe<Learning_Pace_Aggregated_Fields>
  count?: Maybe<Learning_Pace_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Learning_Pace_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Learning_Pace_Aggregated_Fields>
  min?: Maybe<Learning_Pace_Aggregated_Fields>
  sum?: Maybe<Learning_Pace_Aggregated_Fields>
  sumDistinct?: Maybe<Learning_Pace_Aggregated_Fields>
}

export type Learning_Pace_Aggregated_Count = {
  __typename?: 'learning_pace_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  pace_name?: Maybe<Scalars['Int']['output']>
}

export type Learning_Pace_Aggregated_Fields = {
  __typename?: 'learning_pace_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Learning_Pace_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Learning_Pace_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Learning_Pace_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
  pace_name?: InputMaybe<String_Filter_Operators>
}

export type Learning_Pace_Mutated = {
  __typename?: 'learning_pace_mutated'
  data?: Maybe<Learning_Pace>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Main_Taxonomy = {
  __typename?: 'main_taxonomy'
  courses?: Maybe<Array<Maybe<Main_Taxonomy_Courses>>>
  courses_func?: Maybe<Count_Functions>
  discipline?: Maybe<Taxonomy>
  discipline_visualization?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['ID']['output']
  menu?: Maybe<Scalars['String']['output']>
  specialization_level1?: Maybe<Taxonomy_Level1>
  specialization_level1_visualization?: Maybe<Scalars['Boolean']['output']>
  specialization_level2?: Maybe<Taxonomy_Level2>
  specialization_level2_visualization?: Maybe<Scalars['Boolean']['output']>
}

export type Main_TaxonomyCoursesArgs = {
  filter?: InputMaybe<Main_Taxonomy_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Main_TaxonomyDisciplineArgs = {
  filter?: InputMaybe<Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Main_TaxonomySpecialization_Level1Args = {
  filter?: InputMaybe<Taxonomy_Level1_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Main_TaxonomySpecialization_Level2Args = {
  filter?: InputMaybe<Taxonomy_Level2_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Main_Taxonomy_Aggregated = {
  __typename?: 'main_taxonomy_aggregated'
  avg?: Maybe<Main_Taxonomy_Aggregated_Fields>
  avgDistinct?: Maybe<Main_Taxonomy_Aggregated_Fields>
  count?: Maybe<Main_Taxonomy_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Main_Taxonomy_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Main_Taxonomy_Aggregated_Fields>
  min?: Maybe<Main_Taxonomy_Aggregated_Fields>
  sum?: Maybe<Main_Taxonomy_Aggregated_Fields>
  sumDistinct?: Maybe<Main_Taxonomy_Aggregated_Fields>
}

export type Main_Taxonomy_Aggregated_Count = {
  __typename?: 'main_taxonomy_aggregated_count'
  courses?: Maybe<Scalars['Int']['output']>
  discipline?: Maybe<Scalars['Int']['output']>
  discipline_visualization?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  menu?: Maybe<Scalars['Int']['output']>
  specialization_level1?: Maybe<Scalars['Int']['output']>
  specialization_level1_visualization?: Maybe<Scalars['Int']['output']>
  specialization_level2?: Maybe<Scalars['Int']['output']>
  specialization_level2_visualization?: Maybe<Scalars['Int']['output']>
}

export type Main_Taxonomy_Aggregated_Fields = {
  __typename?: 'main_taxonomy_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Main_Taxonomy_Courses = {
  __typename?: 'main_taxonomy_courses'
  courses_id?: Maybe<Courses>
  id: Scalars['ID']['output']
  main_taxonomy_id?: Maybe<Main_Taxonomy>
}

export type Main_Taxonomy_CoursesCourses_IdArgs = {
  filter?: InputMaybe<Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Main_Taxonomy_CoursesMain_Taxonomy_IdArgs = {
  filter?: InputMaybe<Main_Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Main_Taxonomy_Courses_Aggregated = {
  __typename?: 'main_taxonomy_courses_aggregated'
  avg?: Maybe<Main_Taxonomy_Courses_Aggregated_Fields>
  avgDistinct?: Maybe<Main_Taxonomy_Courses_Aggregated_Fields>
  count?: Maybe<Main_Taxonomy_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Main_Taxonomy_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Main_Taxonomy_Courses_Aggregated_Fields>
  min?: Maybe<Main_Taxonomy_Courses_Aggregated_Fields>
  sum?: Maybe<Main_Taxonomy_Courses_Aggregated_Fields>
  sumDistinct?: Maybe<Main_Taxonomy_Courses_Aggregated_Fields>
}

export type Main_Taxonomy_Courses_Aggregated_Count = {
  __typename?: 'main_taxonomy_courses_aggregated_count'
  courses_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  main_taxonomy_id?: Maybe<Scalars['Int']['output']>
}

export type Main_Taxonomy_Courses_Aggregated_Fields = {
  __typename?: 'main_taxonomy_courses_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  main_taxonomy_id?: Maybe<Scalars['Float']['output']>
}

export type Main_Taxonomy_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Main_Taxonomy_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Main_Taxonomy_Courses_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  id?: InputMaybe<Number_Filter_Operators>
  main_taxonomy_id?: InputMaybe<Main_Taxonomy_Filter>
}

export type Main_Taxonomy_Courses_Mutated = {
  __typename?: 'main_taxonomy_courses_mutated'
  data?: Maybe<Main_Taxonomy_Courses>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Main_Taxonomy_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Main_Taxonomy_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Main_Taxonomy_Filter>>>
  courses?: InputMaybe<Main_Taxonomy_Courses_Filter>
  courses_func?: InputMaybe<Count_Function_Filter_Operators>
  discipline?: InputMaybe<Taxonomy_Filter>
  discipline_visualization?: InputMaybe<Boolean_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  menu?: InputMaybe<String_Filter_Operators>
  specialization_level1?: InputMaybe<Taxonomy_Level1_Filter>
  specialization_level1_visualization?: InputMaybe<Boolean_Filter_Operators>
  specialization_level2?: InputMaybe<Taxonomy_Level2_Filter>
  specialization_level2_visualization?: InputMaybe<Boolean_Filter_Operators>
}

export type Main_Taxonomy_Mutated = {
  __typename?: 'main_taxonomy_mutated'
  data?: Maybe<Main_Taxonomy>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Menu_Items = {
  __typename?: 'menu_items'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  is_active?: Maybe<Scalars['Boolean']['output']>
  menu_item_id?: Maybe<Menu_Items>
  menu_item_relationship_id?: Maybe<Scalars['Int']['output']>
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
  id?: Maybe<Scalars['Float']['output']>
  menu_item_id?: Maybe<Scalars['Float']['output']>
  menu_item_relationship_id?: Maybe<Scalars['Float']['output']>
  menu_order?: Maybe<Scalars['Float']['output']>
  menus_id?: Maybe<Scalars['Float']['output']>
}

export type Menu_Items_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menu_Items_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Menu_Items_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  is_active?: InputMaybe<Boolean_Filter_Operators>
  menu_item_id?: InputMaybe<Menu_Items_Filter>
  menu_item_relationship_id?: InputMaybe<Number_Filter_Operators>
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

export type Menus = {
  __typename?: 'menus'
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
}

export type Menus_Aggregated = {
  __typename?: 'menus_aggregated'
  avg?: Maybe<Menus_Aggregated_Fields>
  avgDistinct?: Maybe<Menus_Aggregated_Fields>
  count?: Maybe<Menus_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Menus_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Menus_Aggregated_Fields>
  min?: Maybe<Menus_Aggregated_Fields>
  sum?: Maybe<Menus_Aggregated_Fields>
  sumDistinct?: Maybe<Menus_Aggregated_Fields>
}

export type Menus_Aggregated_Count = {
  __typename?: 'menus_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Menus_Aggregated_Fields = {
  __typename?: 'menus_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Menus_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Menus_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Menus_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
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

export type Pages = {
  __typename?: 'pages'
  content?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type Pages_Aggregated = {
  __typename?: 'pages_aggregated'
  avg?: Maybe<Pages_Aggregated_Fields>
  avgDistinct?: Maybe<Pages_Aggregated_Fields>
  count?: Maybe<Pages_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Pages_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Pages_Aggregated_Fields>
  min?: Maybe<Pages_Aggregated_Fields>
  sum?: Maybe<Pages_Aggregated_Fields>
  sumDistinct?: Maybe<Pages_Aggregated_Fields>
}

export type Pages_Aggregated_Count = {
  __typename?: 'pages_aggregated_count'
  content?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['Int']['output']>
  url?: Maybe<Scalars['Int']['output']>
}

export type Pages_Aggregated_Fields = {
  __typename?: 'pages_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Pages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Pages_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Pages_Filter>>>
  content?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
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
  title?: Maybe<Scalars['String']['output']>
}

export type Posts_Aggregated = {
  __typename?: 'posts_aggregated'
  avg?: Maybe<Posts_Aggregated_Fields>
  avgDistinct?: Maybe<Posts_Aggregated_Fields>
  count?: Maybe<Posts_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Posts_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Posts_Aggregated_Fields>
  min?: Maybe<Posts_Aggregated_Fields>
  sum?: Maybe<Posts_Aggregated_Fields>
  sumDistinct?: Maybe<Posts_Aggregated_Fields>
}

export type Posts_Aggregated_Count = {
  __typename?: 'posts_aggregated_count'
  content?: Maybe<Scalars['Int']['output']>
  excerpt?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  title?: Maybe<Scalars['Int']['output']>
}

export type Posts_Aggregated_Fields = {
  __typename?: 'posts_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
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
  id?: Maybe<Scalars['Float']['output']>
  posts_id?: Maybe<Scalars['Float']['output']>
}

export type Posts_Category_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Category_Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Posts_Category_Posts_Filter>>>
  category_posts_id?: InputMaybe<Category_Posts_Filter>
  id?: InputMaybe<Number_Filter_Operators>
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
  id?: InputMaybe<Number_Filter_Operators>
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
  id?: Maybe<Scalars['Float']['output']>
  posts_id?: Maybe<Scalars['Float']['output']>
  tag_posts_id?: Maybe<Scalars['Float']['output']>
}

export type Posts_Tag_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Posts_Tag_Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Posts_Tag_Posts_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
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
  language_id?: Maybe<Languages>
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

export type ProfilesLanguage_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Profiles_Aggregated = {
  __typename?: 'profiles_aggregated'
  avg?: Maybe<Profiles_Aggregated_Fields>
  avgDistinct?: Maybe<Profiles_Aggregated_Fields>
  count?: Maybe<Profiles_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Profiles_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Profiles_Aggregated_Fields>
  min?: Maybe<Profiles_Aggregated_Fields>
  sum?: Maybe<Profiles_Aggregated_Fields>
  sumDistinct?: Maybe<Profiles_Aggregated_Fields>
}

export type Profiles_Aggregated_Count = {
  __typename?: 'profiles_aggregated_count'
  content_title?: Maybe<Scalars['Int']['output']>
  courses_id?: Maybe<Scalars['Int']['output']>
  data?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  language_id?: Maybe<Scalars['Int']['output']>
  students?: Maybe<Scalars['Int']['output']>
  target?: Maybe<Scalars['Int']['output']>
}

export type Profiles_Aggregated_Fields = {
  __typename?: 'profiles_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  language_id?: Maybe<Scalars['Float']['output']>
}

export type Profiles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Profiles_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Profiles_Filter>>>
  content_title?: InputMaybe<String_Filter_Operators>
  courses_id?: InputMaybe<Courses_Filter>
  data?: InputMaybe<String_Filter_Operators>
  data_func?: InputMaybe<Count_Function_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  language_id?: InputMaybe<Languages_Filter>
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
  avg?: Maybe<Questions_Aggregated_Fields>
  avgDistinct?: Maybe<Questions_Aggregated_Fields>
  count?: Maybe<Questions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Questions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Questions_Aggregated_Fields>
  min?: Maybe<Questions_Aggregated_Fields>
  sum?: Maybe<Questions_Aggregated_Fields>
  sumDistinct?: Maybe<Questions_Aggregated_Fields>
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

export type Questions_Aggregated_Fields = {
  __typename?: 'questions_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  languages_id?: Maybe<Scalars['Float']['output']>
}

export type Questions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Questions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Questions_Filter>>>
  close_question?: InputMaybe<Boolean_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
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
  avg?: Maybe<Reports_Aggregated_Fields>
  avgDistinct?: Maybe<Reports_Aggregated_Fields>
  count?: Maybe<Reports_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Reports_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Reports_Aggregated_Fields>
  min?: Maybe<Reports_Aggregated_Fields>
  sum?: Maybe<Reports_Aggregated_Fields>
  sumDistinct?: Maybe<Reports_Aggregated_Fields>
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

export type Reports_Aggregated_Fields = {
  __typename?: 'reports_aggregated_fields'
  courses_id?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Float']['output']>
  institutions_id?: Maybe<Scalars['Float']['output']>
  o_languages_id?: Maybe<Scalars['Float']['output']>
  users_id?: Maybe<Scalars['Float']['output']>
}

export type Reports_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Reports_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Reports_Filter>>>
  courses_id?: InputMaybe<Courses_Filter>
  data?: InputMaybe<String_Filter_Operators>
  data_func?: InputMaybe<Count_Function_Filter_Operators>
  date?: InputMaybe<Date_Filter_Operators>
  date_func?: InputMaybe<Datetime_Function_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
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
  avg?: Maybe<Reports_Questions_Aggregated_Fields>
  avgDistinct?: Maybe<Reports_Questions_Aggregated_Fields>
  count?: Maybe<Reports_Questions_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Reports_Questions_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Reports_Questions_Aggregated_Fields>
  min?: Maybe<Reports_Questions_Aggregated_Fields>
  sum?: Maybe<Reports_Questions_Aggregated_Fields>
  sumDistinct?: Maybe<Reports_Questions_Aggregated_Fields>
}

export type Reports_Questions_Aggregated_Count = {
  __typename?: 'reports_questions_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  questions_id?: Maybe<Scalars['Int']['output']>
  reports_id?: Maybe<Scalars['Int']['output']>
}

export type Reports_Questions_Aggregated_Fields = {
  __typename?: 'reports_questions_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  questions_id?: Maybe<Scalars['Float']['output']>
  reports_id?: Maybe<Scalars['Float']['output']>
}

export type Reports_Questions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Reports_Questions_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Reports_Questions_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
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
  description?: Maybe<Scalars['JSON']['output']>
  description_func?: Maybe<Count_Functions>
  enum?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  institutions_scholarships_courses?: Maybe<Array<Maybe<Institutions_Scholarships_Courses>>>
  institutions_scholarships_courses_func?: Maybe<Count_Functions>
  is_active?: Maybe<Scalars['Boolean']['output']>
  languages_id?: Maybe<Languages>
  name?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type ScholarshipsInstitutions_Scholarships_CoursesArgs = {
  filter?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ScholarshipsLanguages_IdArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Scholarships_Aggregated = {
  __typename?: 'scholarships_aggregated'
  avg?: Maybe<Scholarships_Aggregated_Fields>
  avgDistinct?: Maybe<Scholarships_Aggregated_Fields>
  count?: Maybe<Scholarships_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Scholarships_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Scholarships_Aggregated_Fields>
  min?: Maybe<Scholarships_Aggregated_Fields>
  sum?: Maybe<Scholarships_Aggregated_Fields>
  sumDistinct?: Maybe<Scholarships_Aggregated_Fields>
}

export type Scholarships_Aggregated_Count = {
  __typename?: 'scholarships_aggregated_count'
  academic_course?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  enum?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  institutions_scholarships_courses?: Maybe<Scalars['Int']['output']>
  is_active?: Maybe<Scalars['Int']['output']>
  languages_id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  type?: Maybe<Scalars['Int']['output']>
}

export type Scholarships_Aggregated_Fields = {
  __typename?: 'scholarships_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  languages_id?: Maybe<Scalars['Float']['output']>
}

export type Scholarships_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Scholarships_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Scholarships_Filter>>>
  academic_course?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  description_func?: InputMaybe<Count_Function_Filter_Operators>
  enum?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  institutions_scholarships_courses?: InputMaybe<Institutions_Scholarships_Courses_Filter>
  institutions_scholarships_courses_func?: InputMaybe<Count_Function_Filter_Operators>
  is_active?: InputMaybe<Boolean_Filter_Operators>
  languages_id?: InputMaybe<Languages_Filter>
  name?: InputMaybe<String_Filter_Operators>
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
  directus_files_id?: Maybe<Directus_Files>
  id: Scalars['ID']['output']
  meta_description?: Maybe<Scalars['String']['output']>
  meta_title?: Maybe<Scalars['String']['output']>
}

export type Seo_TemplateDirectus_Files_IdArgs = {
  filter?: InputMaybe<Directus_Files_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Seo_Template_Aggregated = {
  __typename?: 'seo_template_aggregated'
  avg?: Maybe<Seo_Template_Aggregated_Fields>
  avgDistinct?: Maybe<Seo_Template_Aggregated_Fields>
  count?: Maybe<Seo_Template_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Seo_Template_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Seo_Template_Aggregated_Fields>
  min?: Maybe<Seo_Template_Aggregated_Fields>
  sum?: Maybe<Seo_Template_Aggregated_Fields>
  sumDistinct?: Maybe<Seo_Template_Aggregated_Fields>
}

export type Seo_Template_Aggregated_Count = {
  __typename?: 'seo_template_aggregated_count'
  directus_files_id?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  meta_description?: Maybe<Scalars['Int']['output']>
  meta_title?: Maybe<Scalars['Int']['output']>
}

export type Seo_Template_Aggregated_Fields = {
  __typename?: 'seo_template_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Seo_Template_Block = {
  __typename?: 'seo_template_block'
  id: Scalars['ID']['output']
  seo_template_id?: Maybe<Seo_Template>
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
  avg?: Maybe<Seo_Template_Block_Aggregated_Fields>
  avgDistinct?: Maybe<Seo_Template_Block_Aggregated_Fields>
  count?: Maybe<Seo_Template_Block_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Seo_Template_Block_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Seo_Template_Block_Aggregated_Fields>
  min?: Maybe<Seo_Template_Block_Aggregated_Fields>
  sum?: Maybe<Seo_Template_Block_Aggregated_Fields>
  sumDistinct?: Maybe<Seo_Template_Block_Aggregated_Fields>
}

export type Seo_Template_Block_Aggregated_Count = {
  __typename?: 'seo_template_block_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  seo_template_id?: Maybe<Scalars['Int']['output']>
}

export type Seo_Template_Block_Aggregated_Fields = {
  __typename?: 'seo_template_block_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  seo_template_id?: Maybe<Scalars['Float']['output']>
}

export type Seo_Template_Block_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Seo_Template_Block_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Seo_Template_Block_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
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
  directus_files_id?: InputMaybe<Directus_Files_Filter>
  id?: InputMaybe<Number_Filter_Operators>
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
  avg?: Maybe<Settings_Aggregated_Fields>
  avgDistinct?: Maybe<Settings_Aggregated_Fields>
  count?: Maybe<Settings_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Settings_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Settings_Aggregated_Fields>
  min?: Maybe<Settings_Aggregated_Fields>
  sum?: Maybe<Settings_Aggregated_Fields>
  sumDistinct?: Maybe<Settings_Aggregated_Fields>
}

export type Settings_Aggregated_Count = {
  __typename?: 'settings_aggregated_count'
  constrained?: Maybe<Scalars['Int']['output']>
  data_type?: Maybe<Scalars['Int']['output']>
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
}

export type Settings_Aggregated_Fields = {
  __typename?: 'settings_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Settings_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Settings_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Settings_Filter>>>
  constrained?: InputMaybe<Boolean_Filter_Operators>
  data_type?: InputMaybe<String_Filter_Operators>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
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
  tag_courses_id?: Maybe<Tag_Courses>
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
  avg?: Maybe<Tag_Courses_Aggregated_Fields>
  avgDistinct?: Maybe<Tag_Courses_Aggregated_Fields>
  count?: Maybe<Tag_Courses_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Tag_Courses_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Tag_Courses_Aggregated_Fields>
  min?: Maybe<Tag_Courses_Aggregated_Fields>
  sum?: Maybe<Tag_Courses_Aggregated_Fields>
  sumDistinct?: Maybe<Tag_Courses_Aggregated_Fields>
}

export type Tag_Courses_Aggregated_Count = {
  __typename?: 'tag_courses_aggregated_count'
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  tag_courses_id?: Maybe<Scalars['Int']['output']>
}

export type Tag_Courses_Aggregated_Fields = {
  __typename?: 'tag_courses_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  tag_courses_id?: Maybe<Scalars['Float']['output']>
}

export type Tag_Courses_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Courses_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Tag_Courses_Filter>>>
  description?: InputMaybe<String_Filter_Operators>
  id?: InputMaybe<Number_Filter_Operators>
  name?: InputMaybe<String_Filter_Operators>
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
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  name?: Maybe<Scalars['String']['output']>
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
  description?: Maybe<Scalars['Int']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
}

export type Tag_Posts_Aggregated_Fields = {
  __typename?: 'tag_posts_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
}

export type Tag_Posts_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Posts_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Tag_Posts_Filter>>>
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

export type Taxonomy = {
  __typename?: 'taxonomy'
  id: Scalars['ID']['output']
  taxonomy_trans?: Maybe<Array<Maybe<Taxonomy_Trans>>>
  taxonomy_trans_func?: Maybe<Count_Functions>
}

export type TaxonomyTaxonomy_TransArgs = {
  filter?: InputMaybe<Taxonomy_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Aggregated = {
  __typename?: 'taxonomy_aggregated'
  count?: Maybe<Taxonomy_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Taxonomy_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Taxonomy_Aggregated_Count = {
  __typename?: 'taxonomy_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  taxonomy_trans?: Maybe<Scalars['Int']['output']>
}

export type Taxonomy_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Taxonomy_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Taxonomy_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  taxonomy_trans?: InputMaybe<Taxonomy_Trans_Filter>
  taxonomy_trans_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Taxonomy_Level1 = {
  __typename?: 'taxonomy_level1'
  id: Scalars['ID']['output']
  taxonomy_level1_trans?: Maybe<Array<Maybe<Taxonomy_Level1_Trans>>>
  taxonomy_level1_trans_func?: Maybe<Count_Functions>
}

export type Taxonomy_Level1Taxonomy_Level1_TransArgs = {
  filter?: InputMaybe<Taxonomy_Level1_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Level1_Aggregated = {
  __typename?: 'taxonomy_level1_aggregated'
  count?: Maybe<Taxonomy_Level1_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Taxonomy_Level1_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Taxonomy_Level1_Aggregated_Count = {
  __typename?: 'taxonomy_level1_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  taxonomy_level1_trans?: Maybe<Scalars['Int']['output']>
}

export type Taxonomy_Level1_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Taxonomy_Level1_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Taxonomy_Level1_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  taxonomy_level1_trans?: InputMaybe<Taxonomy_Level1_Trans_Filter>
  taxonomy_level1_trans_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Taxonomy_Level1_Mutated = {
  __typename?: 'taxonomy_level1_mutated'
  data?: Maybe<Taxonomy_Level1>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Taxonomy_Level1_Trans = {
  __typename?: 'taxonomy_level1_trans'
  id: Scalars['ID']['output']
  language?: Maybe<Languages>
  name?: Maybe<Scalars['String']['output']>
  taxonomy_level1_id?: Maybe<Taxonomy_Level1>
}

export type Taxonomy_Level1_TransLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Level1_TransTaxonomy_Level1_IdArgs = {
  filter?: InputMaybe<Taxonomy_Level1_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Level1_Trans_Aggregated = {
  __typename?: 'taxonomy_level1_trans_aggregated'
  avg?: Maybe<Taxonomy_Level1_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Taxonomy_Level1_Trans_Aggregated_Fields>
  count?: Maybe<Taxonomy_Level1_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Taxonomy_Level1_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Taxonomy_Level1_Trans_Aggregated_Fields>
  min?: Maybe<Taxonomy_Level1_Trans_Aggregated_Fields>
  sum?: Maybe<Taxonomy_Level1_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Taxonomy_Level1_Trans_Aggregated_Fields>
}

export type Taxonomy_Level1_Trans_Aggregated_Count = {
  __typename?: 'taxonomy_level1_trans_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  language?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  taxonomy_level1_id?: Maybe<Scalars['Int']['output']>
}

export type Taxonomy_Level1_Trans_Aggregated_Fields = {
  __typename?: 'taxonomy_level1_trans_aggregated_fields'
  language?: Maybe<Scalars['Float']['output']>
}

export type Taxonomy_Level1_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Taxonomy_Level1_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Taxonomy_Level1_Trans_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  language?: InputMaybe<Languages_Filter>
  name?: InputMaybe<String_Filter_Operators>
  taxonomy_level1_id?: InputMaybe<Taxonomy_Level1_Filter>
}

export type Taxonomy_Level1_Trans_Mutated = {
  __typename?: 'taxonomy_level1_trans_mutated'
  data?: Maybe<Taxonomy_Level1_Trans>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Taxonomy_Level2 = {
  __typename?: 'taxonomy_level2'
  id: Scalars['ID']['output']
  taxonomy_level2_trans?: Maybe<Array<Maybe<Taxonomy_Level2_Trans>>>
  taxonomy_level2_trans_func?: Maybe<Count_Functions>
}

export type Taxonomy_Level2Taxonomy_Level2_TransArgs = {
  filter?: InputMaybe<Taxonomy_Level2_Trans_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Level2_Aggregated = {
  __typename?: 'taxonomy_level2_aggregated'
  count?: Maybe<Taxonomy_Level2_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Taxonomy_Level2_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
}

export type Taxonomy_Level2_Aggregated_Count = {
  __typename?: 'taxonomy_level2_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  taxonomy_level2_trans?: Maybe<Scalars['Int']['output']>
}

export type Taxonomy_Level2_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Taxonomy_Level2_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Taxonomy_Level2_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  taxonomy_level2_trans?: InputMaybe<Taxonomy_Level2_Trans_Filter>
  taxonomy_level2_trans_func?: InputMaybe<Count_Function_Filter_Operators>
}

export type Taxonomy_Level2_Mutated = {
  __typename?: 'taxonomy_level2_mutated'
  data?: Maybe<Taxonomy_Level2>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Taxonomy_Level2_Trans = {
  __typename?: 'taxonomy_level2_trans'
  id: Scalars['ID']['output']
  language?: Maybe<Languages>
  name?: Maybe<Scalars['String']['output']>
  taxonomy_level2_id?: Maybe<Taxonomy_Level2>
}

export type Taxonomy_Level2_TransLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Level2_TransTaxonomy_Level2_IdArgs = {
  filter?: InputMaybe<Taxonomy_Level2_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Level2_Trans_Aggregated = {
  __typename?: 'taxonomy_level2_trans_aggregated'
  avg?: Maybe<Taxonomy_Level2_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Taxonomy_Level2_Trans_Aggregated_Fields>
  count?: Maybe<Taxonomy_Level2_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Taxonomy_Level2_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Taxonomy_Level2_Trans_Aggregated_Fields>
  min?: Maybe<Taxonomy_Level2_Trans_Aggregated_Fields>
  sum?: Maybe<Taxonomy_Level2_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Taxonomy_Level2_Trans_Aggregated_Fields>
}

export type Taxonomy_Level2_Trans_Aggregated_Count = {
  __typename?: 'taxonomy_level2_trans_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  language?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  taxonomy_level2_id?: Maybe<Scalars['Int']['output']>
}

export type Taxonomy_Level2_Trans_Aggregated_Fields = {
  __typename?: 'taxonomy_level2_trans_aggregated_fields'
  language?: Maybe<Scalars['Float']['output']>
}

export type Taxonomy_Level2_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Taxonomy_Level2_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Taxonomy_Level2_Trans_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  language?: InputMaybe<Languages_Filter>
  name?: InputMaybe<String_Filter_Operators>
  taxonomy_level2_id?: InputMaybe<Taxonomy_Level2_Filter>
}

export type Taxonomy_Level2_Trans_Mutated = {
  __typename?: 'taxonomy_level2_trans_mutated'
  data?: Maybe<Taxonomy_Level2_Trans>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Taxonomy_Mutated = {
  __typename?: 'taxonomy_mutated'
  data?: Maybe<Taxonomy>
  event?: Maybe<EventEnum>
  key: Scalars['ID']['output']
}

export type Taxonomy_Trans = {
  __typename?: 'taxonomy_trans'
  id: Scalars['ID']['output']
  language?: Maybe<Languages>
  name?: Maybe<Scalars['String']['output']>
  taxonomy_id?: Maybe<Taxonomy>
}

export type Taxonomy_TransLanguageArgs = {
  filter?: InputMaybe<Languages_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_TransTaxonomy_IdArgs = {
  filter?: InputMaybe<Taxonomy_Filter>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  search?: InputMaybe<Scalars['String']['input']>
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Taxonomy_Trans_Aggregated = {
  __typename?: 'taxonomy_trans_aggregated'
  avg?: Maybe<Taxonomy_Trans_Aggregated_Fields>
  avgDistinct?: Maybe<Taxonomy_Trans_Aggregated_Fields>
  count?: Maybe<Taxonomy_Trans_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Taxonomy_Trans_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Taxonomy_Trans_Aggregated_Fields>
  min?: Maybe<Taxonomy_Trans_Aggregated_Fields>
  sum?: Maybe<Taxonomy_Trans_Aggregated_Fields>
  sumDistinct?: Maybe<Taxonomy_Trans_Aggregated_Fields>
}

export type Taxonomy_Trans_Aggregated_Count = {
  __typename?: 'taxonomy_trans_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  language?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['Int']['output']>
  taxonomy_id?: Maybe<Scalars['Int']['output']>
}

export type Taxonomy_Trans_Aggregated_Fields = {
  __typename?: 'taxonomy_trans_aggregated_fields'
  language?: Maybe<Scalars['Float']['output']>
}

export type Taxonomy_Trans_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Taxonomy_Trans_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<Taxonomy_Trans_Filter>>>
  id?: InputMaybe<String_Filter_Operators>
  language?: InputMaybe<Languages_Filter>
  name?: InputMaybe<String_Filter_Operators>
  taxonomy_id?: InputMaybe<Taxonomy_Filter>
}

export type Taxonomy_Trans_Mutated = {
  __typename?: 'taxonomy_trans_mutated'
  data?: Maybe<Taxonomy_Trans>
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

export type Update_Campuses_Courses_Input = {
  campuses_id?: InputMaybe<Update_Campuses_Input>
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Campuses_Input = {
  campuses_trans?: InputMaybe<Array<InputMaybe<Update_Campuses_Trans_Input>>>
  city?: InputMaybe<Scalars['String']['input']>
  country?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  institutions_id?: InputMaybe<Update_Institutions_Input>
  phone?: InputMaybe<Scalars['String']['input']>
  postal_code?: InputMaybe<Scalars['String']['input']>
  state?: InputMaybe<Scalars['String']['input']>
  street_address?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Update_Campuses_Trans_Input = {
  campuses_id?: InputMaybe<Update_Campuses_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  intro?: InputMaybe<Scalars['String']['input']>
  language_id?: InputMaybe<Update_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Categories_Input = {
  category_trans?: InputMaybe<Array<InputMaybe<Update_Categories_Trans_Input>>>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Categories_Trans_Input = {
  category_id?: InputMaybe<Update_Categories_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Update_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  name_normalized?: InputMaybe<Scalars['String']['input']>
}

export type Update_Category_Courses_Input = {
  category_courses?: InputMaybe<Array<InputMaybe<Update_Category_Courses_Input>>>
  category_courses_id?: InputMaybe<Update_Category_Courses_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Category_Posts_Input = {
  category_posts_id?: InputMaybe<Update_Category_Posts_Input>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Category_Relationships_Input = {
  child_id?: InputMaybe<Update_Categories_Input>
  courses?: InputMaybe<Array<InputMaybe<Update_Courses_Category_Relationships_Input>>>
  id?: InputMaybe<Scalars['ID']['input']>
  parent_id?: InputMaybe<Update_Categories_Input>
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

export type Update_Courses_Category_Relationships_Input = {
  category_relationships_id?: InputMaybe<Update_Category_Relationships_Input>
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Courses_Disciplines_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  disciplines_id?: InputMaybe<Update_Disciplines_Input>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Courses_Input = {
  application_date?: InputMaybe<Scalars['Date']['input']>
  average_price?: InputMaybe<Scalars['String']['input']>
  bilinguals_id?: InputMaybe<Update_Bilinguals_Input>
  campuses_courses?: InputMaybe<Array<InputMaybe<Update_Campuses_Courses_Input>>>
  careers_list?: InputMaybe<Scalars['JSON']['input']>
  categories?: InputMaybe<Array<InputMaybe<Update_Courses_Category_Relationships_Input>>>
  course_language?: InputMaybe<Array<InputMaybe<Update_Courses_Languages_Format_Input>>>
  course_trans?: InputMaybe<Array<InputMaybe<Update_Courses_Trans_Input>>>
  degree_id?: InputMaybe<Scalars['Int']['input']>
  degree_type?: InputMaybe<Scalars['String']['input']>
  duration?: InputMaybe<Scalars['String']['input']>
  duration_class?: InputMaybe<Scalars['String']['input']>
  ects?: InputMaybe<Scalars['Int']['input']>
  end_date?: InputMaybe<Scalars['Date']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  id_mp?: InputMaybe<Scalars['String']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  institutions?: InputMaybe<Array<InputMaybe<Update_Joininstitutioncourse_Input>>>
  is_dual?: InputMaybe<Scalars['Boolean']['input']>
  is_official?: InputMaybe<Scalars['Boolean']['input']>
  is_on_demand?: InputMaybe<Scalars['Boolean']['input']>
  learning_format_id?: InputMaybe<Array<InputMaybe<Update_Courses_Learning_Format_Input>>>
  learning_pace_id?: InputMaybe<Array<InputMaybe<Update_Courses_Learning_Pace_Input>>>
  main_taxonomy?: InputMaybe<Array<InputMaybe<Update_Main_Taxonomy_Courses_Input>>>
  meta_tags?: InputMaybe<Scalars['JSON']['input']>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  places_available?: InputMaybe<Scalars['Int']['input']>
  profiles?: InputMaybe<Array<InputMaybe<Update_Profiles_Input>>>
  start_date?: InputMaybe<Scalars['Date']['input']>
  tuition_price?: InputMaybe<Scalars['JSON']['input']>
  type?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  videos?: InputMaybe<Scalars['String']['input']>
}

export type Update_Courses_Languages_Format_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  languages_format_id?: InputMaybe<Update_Languages_Format_Input>
}

export type Update_Courses_Learning_Format_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  learning_format_id?: InputMaybe<Update_Learning_Format_Input>
}

export type Update_Courses_Learning_Pace_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  learning_pace_id?: InputMaybe<Update_Learning_Pace_Input>
}

export type Update_Courses_Trans_Input = {
  admissions?: InputMaybe<Scalars['String']['input']>
  application_date?: InputMaybe<Scalars['Date']['input']>
  career_opportunities?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  course_id?: InputMaybe<Update_Courses_Input>
  course_structure?: InputMaybe<Scalars['JSON']['input']>
  course_syllabus?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  format_schedules?: InputMaybe<Scalars['String']['input']>
  header_scholarships?: InputMaybe<Scalars['String']['input']>
  header_title?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  info_blocks?: InputMaybe<Scalars['JSON']['input']>
  info_header?: InputMaybe<Scalars['String']['input']>
  intro?: InputMaybe<Scalars['String']['input']>
  language_id?: InputMaybe<Update_Languages_Input>
  methodology?: InputMaybe<Scalars['String']['input']>
  pricing?: InputMaybe<Scalars['String']['input']>
  reason_header?: InputMaybe<Scalars['String']['input']>
  requirements?: InputMaybe<Scalars['String']['input']>
  schedules?: InputMaybe<Scalars['String']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
  start_date?: InputMaybe<Scalars['Date']['input']>
  title_career_opportunities?: InputMaybe<Scalars['String']['input']>
  tuition_price_comments?: InputMaybe<Scalars['String']['input']>
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

export type Update_Disciplines_Input = {
  courses?: InputMaybe<Array<InputMaybe<Update_Courses_Disciplines_Input>>>
  discipline_trans?: InputMaybe<Array<InputMaybe<Update_Disciplines_Trans_Input>>>
  discipline_visualization?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  menu?: InputMaybe<Scalars['String']['input']>
  specialization_level1_visualization?: InputMaybe<Scalars['Boolean']['input']>
  specialization_level2_visualization?: InputMaybe<Scalars['Boolean']['input']>
  visualization?: InputMaybe<Scalars['Int']['input']>
}

export type Update_Disciplines_Trans_Input = {
  discipline?: InputMaybe<Scalars['String']['input']>
  discipline_id?: InputMaybe<Update_Disciplines_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  keyword?: InputMaybe<Scalars['String']['input']>
  language?: InputMaybe<Update_Languages_Input>
  specialization_level1?: InputMaybe<Scalars['String']['input']>
  specialization_level2?: InputMaybe<Scalars['String']['input']>
}

export type Update_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  parent?: InputMaybe<Update_Folders_Input>
}

export type Update_Institutions_Input = {
  acronym?: InputMaybe<Scalars['String']['input']>
  commercial_name?: InputMaybe<Scalars['String']['input']>
  courses?: InputMaybe<Array<InputMaybe<Update_Joininstitutioncourse_Input>>>
  id?: InputMaybe<Scalars['ID']['input']>
  id_mp?: InputMaybe<Scalars['String']['input']>
  images?: InputMaybe<Scalars['String']['input']>
  institution_campuses?: InputMaybe<Array<InputMaybe<Update_Campuses_Input>>>
  institutions_scholarships_courses?: InputMaybe<Array<InputMaybe<Update_Institutions_Scholarships_Courses_Input>>>
  institutions_trans?: InputMaybe<Array<InputMaybe<Update_Institutions_Trans_Input>>>
  logo?: InputMaybe<Scalars['String']['input']>
  main_image?: InputMaybe<Scalars['String']['input']>
  meta_type_tags?: InputMaybe<Array<InputMaybe<Update_Institutions_Tag_Institutions_Input>>>
  official_data_source?: InputMaybe<Scalars['String']['input']>
  ownership?: InputMaybe<Scalars['String']['input']>
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

export type Update_Institutions_Trans_Input = {
  commercial_name?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  header_courses?: InputMaybe<Scalars['String']['input']>
  header_details?: InputMaybe<Scalars['JSON']['input']>
  header_rank_and_rec?: InputMaybe<Scalars['String']['input']>
  header_scholarships?: InputMaybe<Scalars['String']['input']>
  header_standsfor?: InputMaybe<Scalars['String']['input']>
  header_title?: InputMaybe<Scalars['String']['input']>
  header_type_and_taxonomy?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  institution_id?: InputMaybe<Update_Institutions_Input>
  intro?: InputMaybe<Scalars['String']['input']>
  language_id?: InputMaybe<Update_Languages_Input>
  rank_and_rec?: InputMaybe<Scalars['JSON']['input']>
  standsfor?: InputMaybe<Scalars['JSON']['input']>
}

export type Update_Joininstitutioncourse_Input = {
  course_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  institution_id?: InputMaybe<Update_Institutions_Input>
}

export type Update_Languages_Format_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language_id?: InputMaybe<Update_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Languages_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Learning_Format_Input = {
  format_name?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Update_Learning_Pace_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  pace_name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Main_Taxonomy_Courses_Input = {
  courses_id?: InputMaybe<Update_Courses_Input>
  id?: InputMaybe<Scalars['ID']['input']>
  main_taxonomy_id?: InputMaybe<Update_Main_Taxonomy_Input>
}

export type Update_Main_Taxonomy_Input = {
  courses?: InputMaybe<Array<InputMaybe<Update_Main_Taxonomy_Courses_Input>>>
  discipline?: InputMaybe<Update_Taxonomy_Input>
  discipline_visualization?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  menu?: InputMaybe<Scalars['String']['input']>
  specialization_level1?: InputMaybe<Update_Taxonomy_Level1_Input>
  specialization_level1_visualization?: InputMaybe<Scalars['Boolean']['input']>
  specialization_level2?: InputMaybe<Update_Taxonomy_Level2_Input>
  specialization_level2_visualization?: InputMaybe<Scalars['Boolean']['input']>
}

export type Update_Menu_Items_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  menu_item_id?: InputMaybe<Update_Menu_Items_Input>
  menu_item_relationship_id?: InputMaybe<Scalars['Int']['input']>
  menu_order?: InputMaybe<Scalars['Int']['input']>
  menus_id?: InputMaybe<Update_Menus_Input>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type Update_Menus_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Pages_Input = {
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
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
  language_id?: InputMaybe<Update_Languages_Input>
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
  description?: InputMaybe<Scalars['JSON']['input']>
  enum?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  institutions_scholarships_courses?: InputMaybe<Array<InputMaybe<Update_Institutions_Scholarships_Courses_Input>>>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  languages_id?: InputMaybe<Update_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type Update_Seo_Template_Block_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  seo_template_id?: InputMaybe<Update_Seo_Template_Input>
}

export type Update_Seo_Template_Input = {
  directus_files_id?: InputMaybe<Update_Directus_Files_Input>
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
  tag_courses_id?: InputMaybe<Update_Tag_Courses_Input>
}

export type Update_Tag_Institutions_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Tag_Posts_Input = {
  description?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type Update_Taxonomy_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  taxonomy_trans?: InputMaybe<Array<InputMaybe<Update_Taxonomy_Trans_Input>>>
}

export type Update_Taxonomy_Level1_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  taxonomy_level1_trans?: InputMaybe<Array<InputMaybe<Update_Taxonomy_Level1_Trans_Input>>>
}

export type Update_Taxonomy_Level1_Trans_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Update_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  taxonomy_level1_id?: InputMaybe<Update_Taxonomy_Level1_Input>
}

export type Update_Taxonomy_Level2_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  taxonomy_level2_trans?: InputMaybe<Array<InputMaybe<Update_Taxonomy_Level2_Trans_Input>>>
}

export type Update_Taxonomy_Level2_Trans_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Update_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  taxonomy_level2_id?: InputMaybe<Update_Taxonomy_Level2_Input>
}

export type Update_Taxonomy_Trans_Input = {
  id?: InputMaybe<Scalars['ID']['input']>
  language?: InputMaybe<Update_Languages_Input>
  name?: InputMaybe<Scalars['String']['input']>
  taxonomy_id?: InputMaybe<Update_Taxonomy_Input>
}

export type Update_User_Setting_Input = {
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
  id: Scalars['ID']['output']
  settings_id?: Maybe<Settings>
  unconstrained_value?: Maybe<Scalars['String']['output']>
  users_id?: Maybe<Users>
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
  avg?: Maybe<User_Setting_Aggregated_Fields>
  avgDistinct?: Maybe<User_Setting_Aggregated_Fields>
  count?: Maybe<User_Setting_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<User_Setting_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<User_Setting_Aggregated_Fields>
  min?: Maybe<User_Setting_Aggregated_Fields>
  sum?: Maybe<User_Setting_Aggregated_Fields>
  sumDistinct?: Maybe<User_Setting_Aggregated_Fields>
}

export type User_Setting_Aggregated_Count = {
  __typename?: 'user_setting_aggregated_count'
  id?: Maybe<Scalars['Int']['output']>
  settings_id?: Maybe<Scalars['Int']['output']>
  unconstrained_value?: Maybe<Scalars['Int']['output']>
  users_id?: Maybe<Scalars['Int']['output']>
}

export type User_Setting_Aggregated_Fields = {
  __typename?: 'user_setting_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
  settings_id?: Maybe<Scalars['Float']['output']>
  users_id?: Maybe<Scalars['Float']['output']>
}

export type User_Setting_Filter = {
  _and?: InputMaybe<Array<InputMaybe<User_Setting_Filter>>>
  _or?: InputMaybe<Array<InputMaybe<User_Setting_Filter>>>
  id?: InputMaybe<Number_Filter_Operators>
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
  avg?: Maybe<Users_Aggregated_Fields>
  avgDistinct?: Maybe<Users_Aggregated_Fields>
  count?: Maybe<Users_Aggregated_Count>
  countAll?: Maybe<Scalars['Int']['output']>
  countDistinct?: Maybe<Users_Aggregated_Count>
  group?: Maybe<Scalars['JSON']['output']>
  max?: Maybe<Users_Aggregated_Fields>
  min?: Maybe<Users_Aggregated_Fields>
  sum?: Maybe<Users_Aggregated_Fields>
  sumDistinct?: Maybe<Users_Aggregated_Fields>
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

export type Users_Aggregated_Fields = {
  __typename?: 'users_aggregated_fields'
  id?: Maybe<Scalars['Float']['output']>
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
  id?: InputMaybe<Number_Filter_Operators>
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

export type Version_Campuses = {
  __typename?: 'version_campuses'
  campuses_trans?: Maybe<Scalars['JSON']['output']>
  city?: Maybe<Scalars['String']['output']>
  country?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  images?: Maybe<Scalars['String']['output']>
  institutions_id?: Maybe<Scalars['JSON']['output']>
  phone?: Maybe<Scalars['String']['output']>
  postal_code?: Maybe<Scalars['String']['output']>
  state?: Maybe<Scalars['String']['output']>
  street_address?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type Version_Campuses_Courses = {
  __typename?: 'version_campuses_courses'
  campuses_id?: Maybe<Scalars['JSON']['output']>
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Campuses_Trans = {
  __typename?: 'version_campuses_trans'
  campuses_id?: Maybe<Scalars['JSON']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  intro?: Maybe<Scalars['String']['output']>
  language_id?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Categories = {
  __typename?: 'version_categories'
  category_trans?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Categories_Trans = {
  __typename?: 'version_categories_trans'
  category_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  language?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
  name_normalized?: Maybe<Scalars['String']['output']>
}

export type Version_Category_Courses = {
  __typename?: 'version_category_courses'
  category_courses?: Maybe<Scalars['JSON']['output']>
  category_courses_id?: Maybe<Scalars['JSON']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Category_Posts = {
  __typename?: 'version_category_posts'
  category_posts_id?: Maybe<Scalars['JSON']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Category_Relationships = {
  __typename?: 'version_category_relationships'
  child_id?: Maybe<Scalars['JSON']['output']>
  courses?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  parent_id?: Maybe<Scalars['JSON']['output']>
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
  average_price?: Maybe<Scalars['String']['output']>
  bilinguals_id?: Maybe<Scalars['JSON']['output']>
  campuses_courses?: Maybe<Scalars['JSON']['output']>
  careers_list?: Maybe<Scalars['JSON']['output']>
  categories?: Maybe<Scalars['JSON']['output']>
  course_language?: Maybe<Scalars['JSON']['output']>
  course_trans?: Maybe<Scalars['JSON']['output']>
  degree_id?: Maybe<Scalars['Int']['output']>
  degree_type?: Maybe<Scalars['String']['output']>
  duration?: Maybe<Scalars['String']['output']>
  duration_class?: Maybe<Scalars['String']['output']>
  ects?: Maybe<Scalars['Int']['output']>
  end_date?: Maybe<Scalars['Date']['output']>
  id?: Maybe<Scalars['ID']['output']>
  id_mp?: Maybe<Scalars['String']['output']>
  images?: Maybe<Scalars['String']['output']>
  institutions?: Maybe<Scalars['JSON']['output']>
  is_dual?: Maybe<Scalars['Boolean']['output']>
  is_official?: Maybe<Scalars['Boolean']['output']>
  is_on_demand?: Maybe<Scalars['Boolean']['output']>
  learning_format_id?: Maybe<Scalars['JSON']['output']>
  learning_pace_id?: Maybe<Scalars['JSON']['output']>
  main_taxonomy?: Maybe<Scalars['JSON']['output']>
  meta_tags?: Maybe<Scalars['JSON']['output']>
  official_data_source?: Maybe<Scalars['String']['output']>
  places_available?: Maybe<Scalars['Int']['output']>
  profiles?: Maybe<Scalars['JSON']['output']>
  start_date?: Maybe<Scalars['Date']['output']>
  tuition_price?: Maybe<Scalars['JSON']['output']>
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

export type Version_Courses_Category_Relationships = {
  __typename?: 'version_courses_category_relationships'
  category_relationships_id?: Maybe<Scalars['JSON']['output']>
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Courses_Disciplines = {
  __typename?: 'version_courses_disciplines'
  courses_id?: Maybe<Scalars['JSON']['output']>
  disciplines_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Courses_Languages_Format = {
  __typename?: 'version_courses_languages_format'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  languages_format_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Courses_Learning_Format = {
  __typename?: 'version_courses_learning_format'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  learning_format_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Courses_Learning_Pace = {
  __typename?: 'version_courses_learning_pace'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  learning_pace_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Courses_Trans = {
  __typename?: 'version_courses_trans'
  admissions?: Maybe<Scalars['String']['output']>
  application_date?: Maybe<Scalars['Date']['output']>
  career_opportunities?: Maybe<Scalars['String']['output']>
  commercial_name?: Maybe<Scalars['String']['output']>
  course_id?: Maybe<Scalars['JSON']['output']>
  course_structure?: Maybe<Scalars['JSON']['output']>
  course_syllabus?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  format_schedules?: Maybe<Scalars['String']['output']>
  header_scholarships?: Maybe<Scalars['String']['output']>
  header_title?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  info_blocks?: Maybe<Scalars['JSON']['output']>
  info_header?: Maybe<Scalars['String']['output']>
  intro?: Maybe<Scalars['String']['output']>
  language_id?: Maybe<Scalars['JSON']['output']>
  methodology?: Maybe<Scalars['String']['output']>
  pricing?: Maybe<Scalars['String']['output']>
  reason_header?: Maybe<Scalars['String']['output']>
  requirements?: Maybe<Scalars['String']['output']>
  schedules?: Maybe<Scalars['String']['output']>
  standsfor?: Maybe<Scalars['JSON']['output']>
  start_date?: Maybe<Scalars['Date']['output']>
  title_career_opportunities?: Maybe<Scalars['String']['output']>
  tuition_price_comments?: Maybe<Scalars['String']['output']>
}

export type Version_Disciplines = {
  __typename?: 'version_disciplines'
  courses?: Maybe<Scalars['JSON']['output']>
  discipline_trans?: Maybe<Scalars['JSON']['output']>
  discipline_visualization?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['ID']['output']>
  menu?: Maybe<Scalars['String']['output']>
  specialization_level1_visualization?: Maybe<Scalars['Boolean']['output']>
  specialization_level2_visualization?: Maybe<Scalars['Boolean']['output']>
  visualization?: Maybe<Scalars['Int']['output']>
}

export type Version_Disciplines_Trans = {
  __typename?: 'version_disciplines_trans'
  discipline?: Maybe<Scalars['String']['output']>
  discipline_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  keyword?: Maybe<Scalars['String']['output']>
  language?: Maybe<Scalars['JSON']['output']>
  specialization_level1?: Maybe<Scalars['String']['output']>
  specialization_level2?: Maybe<Scalars['String']['output']>
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
  courses?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  id_mp?: Maybe<Scalars['String']['output']>
  images?: Maybe<Scalars['String']['output']>
  institution_campuses?: Maybe<Scalars['JSON']['output']>
  institutions_scholarships_courses?: Maybe<Scalars['JSON']['output']>
  institutions_trans?: Maybe<Scalars['JSON']['output']>
  logo?: Maybe<Scalars['String']['output']>
  main_image?: Maybe<Scalars['String']['output']>
  meta_type_tags?: Maybe<Scalars['JSON']['output']>
  official_data_source?: Maybe<Scalars['String']['output']>
  ownership?: Maybe<Scalars['String']['output']>
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

export type Version_Institutions_Trans = {
  __typename?: 'version_institutions_trans'
  commercial_name?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  header_courses?: Maybe<Scalars['String']['output']>
  header_details?: Maybe<Scalars['JSON']['output']>
  header_rank_and_rec?: Maybe<Scalars['String']['output']>
  header_scholarships?: Maybe<Scalars['String']['output']>
  header_standsfor?: Maybe<Scalars['String']['output']>
  header_title?: Maybe<Scalars['String']['output']>
  header_type_and_taxonomy?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  institution_id?: Maybe<Scalars['JSON']['output']>
  intro?: Maybe<Scalars['String']['output']>
  language_id?: Maybe<Scalars['JSON']['output']>
  rank_and_rec?: Maybe<Scalars['JSON']['output']>
  standsfor?: Maybe<Scalars['JSON']['output']>
}

export type Version_Joininstitutioncourse = {
  __typename?: 'version_joininstitutioncourse'
  course_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  institution_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Languages = {
  __typename?: 'version_languages'
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Languages_Format = {
  __typename?: 'version_languages_format'
  id?: Maybe<Scalars['ID']['output']>
  language_id?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Learning_Format = {
  __typename?: 'version_learning_format'
  format_name?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
}

export type Version_Learning_Pace = {
  __typename?: 'version_learning_pace'
  id?: Maybe<Scalars['ID']['output']>
  pace_name?: Maybe<Scalars['String']['output']>
}

export type Version_Main_Taxonomy = {
  __typename?: 'version_main_taxonomy'
  courses?: Maybe<Scalars['JSON']['output']>
  discipline?: Maybe<Scalars['JSON']['output']>
  discipline_visualization?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['ID']['output']>
  menu?: Maybe<Scalars['String']['output']>
  specialization_level1?: Maybe<Scalars['JSON']['output']>
  specialization_level1_visualization?: Maybe<Scalars['Boolean']['output']>
  specialization_level2?: Maybe<Scalars['JSON']['output']>
  specialization_level2_visualization?: Maybe<Scalars['Boolean']['output']>
}

export type Version_Main_Taxonomy_Courses = {
  __typename?: 'version_main_taxonomy_courses'
  courses_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  main_taxonomy_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Menu_Items = {
  __typename?: 'version_menu_items'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  is_active?: Maybe<Scalars['Boolean']['output']>
  menu_item_id?: Maybe<Scalars['JSON']['output']>
  menu_item_relationship_id?: Maybe<Scalars['Int']['output']>
  menu_order?: Maybe<Scalars['Int']['output']>
  menus_id?: Maybe<Scalars['JSON']['output']>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type Version_Menus = {
  __typename?: 'version_menus'
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Pages = {
  __typename?: 'version_pages'
  content?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
}

export type Version_Posts = {
  __typename?: 'version_posts'
  content?: Maybe<Scalars['String']['output']>
  excerpt?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
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
  language_id?: Maybe<Scalars['JSON']['output']>
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
  description?: Maybe<Scalars['JSON']['output']>
  enum?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  institutions_scholarships_courses?: Maybe<Scalars['JSON']['output']>
  is_active?: Maybe<Scalars['Boolean']['output']>
  languages_id?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
  type?: Maybe<Scalars['String']['output']>
}

export type Version_Seo_Template = {
  __typename?: 'version_seo_template'
  directus_files_id?: Maybe<Scalars['JSON']['output']>
  id?: Maybe<Scalars['ID']['output']>
  meta_description?: Maybe<Scalars['String']['output']>
  meta_title?: Maybe<Scalars['String']['output']>
}

export type Version_Seo_Template_Block = {
  __typename?: 'version_seo_template_block'
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
  description?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['ID']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Version_Taxonomy = {
  __typename?: 'version_taxonomy'
  id?: Maybe<Scalars['ID']['output']>
  taxonomy_trans?: Maybe<Scalars['JSON']['output']>
}

export type Version_Taxonomy_Level1 = {
  __typename?: 'version_taxonomy_level1'
  id?: Maybe<Scalars['ID']['output']>
  taxonomy_level1_trans?: Maybe<Scalars['JSON']['output']>
}

export type Version_Taxonomy_Level1_Trans = {
  __typename?: 'version_taxonomy_level1_trans'
  id?: Maybe<Scalars['ID']['output']>
  language?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
  taxonomy_level1_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Taxonomy_Level2 = {
  __typename?: 'version_taxonomy_level2'
  id?: Maybe<Scalars['ID']['output']>
  taxonomy_level2_trans?: Maybe<Scalars['JSON']['output']>
}

export type Version_Taxonomy_Level2_Trans = {
  __typename?: 'version_taxonomy_level2_trans'
  id?: Maybe<Scalars['ID']['output']>
  language?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
  taxonomy_level2_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_Taxonomy_Trans = {
  __typename?: 'version_taxonomy_trans'
  id?: Maybe<Scalars['ID']['output']>
  language?: Maybe<Scalars['JSON']['output']>
  name?: Maybe<Scalars['String']['output']>
  taxonomy_id?: Maybe<Scalars['JSON']['output']>
}

export type Version_User_Setting = {
  __typename?: 'version_user_setting'
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

export type CampusesInfoFragment = {
  __typename?: 'campuses'
  street_address?: string | null
  city?: string | null
  country?: string | null
  postal_code?: string | null
  images?: string | null
  phone?: string | null
  type?: string | null
  state?: string | null
  campuses_trans?: Array<{
    __typename?: 'campuses_trans'
    intro?: string | null
    description?: string | null
    name?: string | null
  } | null> | null
}

export type CourseCampusesFragment = {
  __typename?: 'courses'
  campuses_courses?: Array<{
    __typename?: 'campuses_courses'
    campuses_id?: {
      __typename?: 'campuses'
      street_address?: string | null
      city?: string | null
      country?: string | null
      postal_code?: string | null
      images?: string | null
      phone?: string | null
      type?: string | null
      state?: string | null
      campuses_trans?: Array<{
        __typename?: 'campuses_trans'
        intro?: string | null
        description?: string | null
        name?: string | null
      } | null> | null
    } | null
  } | null> | null
}

export type CoursesInstitutionFragment = {
  __typename?: 'courses'
  institutions?: Array<{
    __typename?: 'joininstitutioncourse'
    institution_id?: {
      __typename?: 'institutions'
      logo?: string | null
      main_image?: string | null
      top_masters?: string | null
      institutions_trans?: Array<{
        __typename?: 'institutions_trans'
        intro?: string | null
        description?: string | null
        header_details?: any | null
        commercial_name?: string | null
      } | null> | null
      institutions_scholarships_courses?: Array<{
        __typename?: 'institutions_scholarships_courses'
        scholarships_id?: {
          __typename?: 'scholarships'
          enum?: string | null
          description?: any | null
          academic_course?: string | null
          is_active?: boolean | null
          type?: string | null
        } | null
      } | null> | null
    } | null
  } | null> | null
}

export type CoursesInstitutionFilterFragment = {
  __typename?: 'courses'
  institutions?: Array<{
    __typename?: 'joininstitutioncourse'
    institution_id?: {
      __typename?: 'institutions'
      logo?: string | null
      main_image?: string | null
      top_masters?: string | null
      institutions_trans?: Array<{ __typename?: 'institutions_trans'; commercial_name?: string | null } | null> | null
      institution_campuses?: Array<{ __typename?: 'campuses'; state?: string | null } | null> | null
    } | null
  } | null> | null
}

export type CoursesLanguagesFragment = {
  __typename?: 'courses'
  course_language?: Array<{
    __typename?: 'courses_languages_format'
    languages_format_id?: { __typename?: 'languages_format'; name?: string | null } | null
  } | null> | null
}

export type CoursesProfilesFragment = {
  __typename?: 'courses'
  profiles?: Array<{
    __typename?: 'profiles'
    content_title?: string | null
    students?: any | null
    target?: any | null
    data?: any | null
  } | null> | null
}

export type CourseTransHeadFragment = {
  __typename?: 'courses_trans'
  commercial_name?: string | null
  intro?: string | null
  description?: string | null
}

export type CoursesTransInfoFragment = { __typename?: 'courses_trans'; info_blocks?: any | null; methodology?: string | null }

export type CourseTransTitleFragment = {
  __typename?: 'courses_trans'
  header_title?: string | null
  info_header?: string | null
  reason_header?: string | null
  course_syllabus?: string | null
  format_schedules?: string | null
  admissions?: string | null
  title_career_opportunities?: string | null
  pricing?: string | null
  header_scholarships?: string | null
}

export type DisciplineInfoFragment = {
  __typename?: 'disciplines'
  menu: string
  discipline_visualization?: boolean | null
  specialization_level1_visualization?: boolean | null
  specialization_level2_visualization?: boolean | null
  visualization?: number | null
  id: string
}

export type DisciplineTransInfoFragment = {
  __typename?: 'disciplines_trans'
  discipline: string
  specialization_level1?: string | null
  specialization_level2?: string | null
  keyword?: string | null
}

export type InstitutionsLocationsFragment = {
  __typename?: 'institutions'
  institution_campuses?: Array<{
    __typename?: 'campuses'
    street_address?: string | null
    city?: string | null
    country?: string | null
    postal_code?: string | null
    images?: string | null
    phone?: string | null
    type?: string | null
    state?: string | null
    campuses_trans?: Array<{
      __typename?: 'campuses_trans'
      intro?: string | null
      description?: string | null
      name?: string | null
    } | null> | null
  } | null> | null
}

export type InstitutionsCoursesFragment = {
  __typename?: 'institutions'
  courses?: Array<{
    __typename?: 'joininstitutioncourse'
    course_id?: {
      __typename?: 'courses'
      tuition_price?: any | null
      is_official?: boolean | null
      id: string
      type: string
      duration?: string | null
      duration_class?: string | null
      meta_tags?: any | null
      images?: string | null
      course_trans?: Array<{ __typename?: 'courses_trans'; commercial_name?: string | null } | null> | null
      learning_format_id?: Array<{
        __typename?: 'courses_learning_format'
        learning_format_id?: { __typename?: 'learning_format'; format_name?: string | null } | null
      } | null> | null
    } | null
  } | null> | null
}

export type InstitutionsHeadFragment = {
  __typename?: 'institutions'
  url?: string | null
  logo?: string | null
  main_image?: string | null
}

export type InstitutionsScholarshipsFragment = {
  __typename?: 'institutions'
  institutions_scholarships_courses?: Array<{
    __typename?: 'institutions_scholarships_courses'
    scholarships_id?: {
      __typename?: 'scholarships'
      description?: any | null
      academic_course?: string | null
      is_active?: boolean | null
      type?: string | null
      languages_id?: { __typename?: 'languages'; name?: string | null } | null
    } | null
  } | null> | null
}

export type InstitutionsTagsFragment = {
  __typename?: 'institutions'
  meta_type_tags?: Array<{
    __typename?: 'institutions_tag_institutions'
    tag_institutions_id?: { __typename?: 'tag_institutions'; name?: string | null } | null
  } | null> | null
}

export type InstitutionsTransAboutFragment = {
  __typename?: 'institutions_trans'
  intro?: string | null
  description?: string | null
  header_details?: any | null
}

export type InstitutionsTransHeadFragment = { __typename?: 'institutions_trans'; commercial_name?: string | null }

export type InstitutionsTransRankAndRecFragment = { __typename?: 'institutions_trans'; rank_and_rec?: any | null }

export type InstitutionsTransStandsForFragment = { __typename?: 'institutions_trans'; standsfor?: any | null }

export type InstitutionsTransTitlesFragment = {
  __typename?: 'institutions_trans'
  header_title?: string | null
  header_rank_and_rec?: string | null
  header_standsfor?: string | null
  header_type_and_taxonomy?: string | null
  header_courses?: string | null
  header_scholarships?: string | null
  header_details?: any | null
}

export type ProfileInfoFragment = {
  __typename?: 'profiles'
  content_title?: string | null
  students?: any | null
  target?: any | null
  data?: any | null
}

export type ScholarshipsInfoFragment = {
  __typename?: 'scholarships'
  description?: any | null
  academic_course?: string | null
  is_active?: boolean | null
  type?: string | null
}

export type GetCoursesLanguagesQueryVariables = Exact<{
  filter?: InputMaybe<Course_Languages_Filter>
}>

export type GetCoursesLanguagesQuery = {
  __typename?: 'Query'
  course_languages: Array<{ __typename?: 'course_languages'; id: string; name?: string | null; direction?: string | null }>
}

export type FilterCoursesQueryVariables = Exact<{
  languageName: Scalars['String']['input']
  filter?: InputMaybe<Courses_Filter>
  page?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>
}>

export type FilterCoursesQuery = {
  __typename?: 'Query'
  courses: Array<{
    __typename?: 'courses'
    course_trans?: Array<{
      __typename?: 'courses_trans'
      commercial_name?: string | null
      course_id?: {
        __typename?: 'courses'
        id: string
        type: string
        is_official?: boolean | null
        duration_class?: string | null
        duration?: string | null
        tuition_price?: any | null
        average_price?: string | null
        places_available?: number | null
        images?: string | null
        start_date?: any | null
        start_date_func?: { __typename?: 'date_functions'; year?: number | null; month?: number | null; day?: number | null } | null
        learning_format?: Array<{
          __typename?: 'courses_learning_format'
          learning_format_id?: { __typename?: 'learning_format'; format_name?: string | null } | null
        } | null> | null
        course_language?: Array<{
          __typename?: 'courses_languages_format'
          languages_format_id?: { __typename?: 'languages_format'; name?: string | null } | null
        } | null> | null
        institutions?: Array<{
          __typename?: 'joininstitutioncourse'
          institution_id?: {
            __typename?: 'institutions'
            logo?: string | null
            main_image?: string | null
            top_masters?: string | null
            institutions_trans?: Array<{ __typename?: 'institutions_trans'; commercial_name?: string | null } | null> | null
            institution_campuses?: Array<{ __typename?: 'campuses'; state?: string | null } | null> | null
          } | null
        } | null> | null
        campuses_courses?: Array<{
          __typename?: 'campuses_courses'
          campuses_id?: {
            __typename?: 'campuses'
            street_address?: string | null
            city?: string | null
            country?: string | null
            postal_code?: string | null
            images?: string | null
            phone?: string | null
            type?: string | null
            state?: string | null
            campuses_trans?: Array<{
              __typename?: 'campuses_trans'
              intro?: string | null
              description?: string | null
              name?: string | null
            } | null> | null
          } | null
        } | null> | null
      } | null
    } | null> | null
    main_taxonomy?: Array<{
      __typename?: 'main_taxonomy_courses'
      main_taxonomy_id?: {
        __typename?: 'main_taxonomy'
        discipline_visualization?: boolean | null
        specialization_level1_visualization?: boolean | null
        specialization_level2_visualization?: boolean | null
        discipline?: { __typename?: 'taxonomy'; id: string } | null
        specialization_level1?: { __typename?: 'taxonomy_level1'; id: string } | null
        specialization_level2?: { __typename?: 'taxonomy_level2'; id: string } | null
      } | null
    } | null> | null
  }>
}

export type GetCourseQueryVariables = Exact<{
  id: Scalars['ID']['input']
  languageName: Scalars['String']['input']
}>

export type GetCourseQuery = {
  __typename?: 'Query'
  courses_by_id?: {
    __typename?: 'courses'
    course_trans?: Array<{
      __typename?: 'courses_trans'
      id: string
      standsfor?: any | null
      course_structure?: any | null
      schedules?: string | null
      requirements?: string | null
      career_opportunities?: string | null
      tuition_price_comments?: string | null
      commercial_name?: string | null
      intro?: string | null
      description?: string | null
      info_blocks?: any | null
      methodology?: string | null
      header_title?: string | null
      info_header?: string | null
      reason_header?: string | null
      course_syllabus?: string | null
      format_schedules?: string | null
      admissions?: string | null
      title_career_opportunities?: string | null
      pricing?: string | null
      header_scholarships?: string | null
      course_id?: {
        __typename?: 'courses'
        id: string
        type: string
        is_official?: boolean | null
        duration?: string | null
        is_dual?: boolean | null
        ects?: number | null
        degree_type?: string | null
        degree_id?: number | null
        url?: string | null
        is_on_demand?: boolean | null
        application_date?: any | null
        videos?: string | null
        images?: string | null
        tuition_price?: any | null
        official_data_source?: string | null
        careers_list?: any | null
        duration_class?: string | null
        meta_tags?: any | null
        average_price?: string | null
        start_date?: any | null
        places_available?: number | null
        end_date?: any | null
        bilinguals?: { __typename?: 'bilinguals'; name: string } | null
        learning_format?: Array<{
          __typename?: 'courses_learning_format'
          learning_format_id?: { __typename?: 'learning_format'; format_name?: string | null } | null
        } | null> | null
        learning_pace?: Array<{
          __typename?: 'courses_learning_pace'
          learning_pace_id?: { __typename?: 'learning_pace'; pace_name?: string | null } | null
        } | null> | null
        start_date_func?: { __typename?: 'date_functions'; year?: number | null; month?: number | null; day?: number | null } | null
        end_date_func?: { __typename?: 'date_functions'; year?: number | null; month?: number | null; day?: number | null } | null
        course_language?: Array<{
          __typename?: 'courses_languages_format'
          languages_format_id?: { __typename?: 'languages_format'; name?: string | null } | null
        } | null> | null
        institutions?: Array<{
          __typename?: 'joininstitutioncourse'
          institution_id?: {
            __typename?: 'institutions'
            logo?: string | null
            main_image?: string | null
            top_masters?: string | null
            institutions_trans?: Array<{
              __typename?: 'institutions_trans'
              intro?: string | null
              description?: string | null
              header_details?: any | null
              commercial_name?: string | null
            } | null> | null
            institutions_scholarships_courses?: Array<{
              __typename?: 'institutions_scholarships_courses'
              scholarships_id?: {
                __typename?: 'scholarships'
                enum?: string | null
                description?: any | null
                academic_course?: string | null
                is_active?: boolean | null
                type?: string | null
              } | null
            } | null> | null
          } | null
        } | null> | null
        profiles?: Array<{
          __typename?: 'profiles'
          content_title?: string | null
          students?: any | null
          target?: any | null
          data?: any | null
        } | null> | null
        campuses_courses?: Array<{
          __typename?: 'campuses_courses'
          campuses_id?: {
            __typename?: 'campuses'
            street_address?: string | null
            city?: string | null
            country?: string | null
            postal_code?: string | null
            images?: string | null
            phone?: string | null
            type?: string | null
            state?: string | null
            campuses_trans?: Array<{
              __typename?: 'campuses_trans'
              intro?: string | null
              description?: string | null
              name?: string | null
            } | null> | null
          } | null
        } | null> | null
      } | null
    } | null> | null
  } | null
}

export type IdCoursesQueryVariables = Exact<{ [key: string]: never }>

export type IdCoursesQuery = {
  __typename?: 'Query'
  courses: Array<{
    __typename?: 'courses'
    id: string
    institutions?: Array<{ __typename?: 'joininstitutioncourse'; id: string } | null> | null
  }>
}

export type TestCoursesQueryVariables = Exact<{
  languageName: Scalars['String']['input']
  filter?: InputMaybe<Courses_Filter>
  page?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>
}>

export type TestCoursesQuery = {
  __typename?: 'Query'
  courses: Array<{
    __typename?: 'courses'
    course_trans?: Array<{
      __typename?: 'courses_trans'
      commercial_name?: string | null
      course_id?: {
        __typename?: 'courses'
        id: string
        type: string
        is_official?: boolean | null
        duration_class?: string | null
        duration?: string | null
        tuition_price?: any | null
        average_price?: string | null
        places_available?: number | null
        start_date?: any | null
        course_language?: Array<{
          __typename?: 'courses_languages_format'
          languages_format_id?: { __typename?: 'languages_format'; name?: string | null } | null
        } | null> | null
        start_date_func?: { __typename?: 'date_functions'; year?: number | null; month?: number | null; day?: number | null } | null
        institutions?: Array<{
          __typename?: 'joininstitutioncourse'
          institution_id?: {
            __typename?: 'institutions'
            logo?: string | null
            main_image?: string | null
            top_masters?: string | null
            institutions_trans?: Array<{ __typename?: 'institutions_trans'; commercial_name?: string | null } | null> | null
          } | null
        } | null> | null
      } | null
    } | null> | null
    main_taxonomy?: Array<{
      __typename?: 'main_taxonomy_courses'
      main_taxonomy_id?: {
        __typename?: 'main_taxonomy'
        discipline_visualization?: boolean | null
        specialization_level1_visualization?: boolean | null
        specialization_level2_visualization?: boolean | null
        discipline?: { __typename?: 'taxonomy'; id: string } | null
        specialization_level1?: { __typename?: 'taxonomy_level1'; id: string } | null
        specialization_level2?: { __typename?: 'taxonomy_level2'; id: string } | null
      } | null
    } | null> | null
  }>
}

export type GetDisciplinesQueryVariables = Exact<{
  languageName: Scalars['String']['input']
}>

export type GetDisciplinesQuery = {
  __typename?: 'Query'
  disciplines: Array<{
    __typename?: 'disciplines'
    menu: string
    discipline_visualization?: boolean | null
    id: string
    visualization?: number | null
    specialization_level1_visualization?: boolean | null
    specialization_level2_visualization?: boolean | null
    discipline_trans?: Array<{
      __typename?: 'disciplines_trans'
      discipline: string
      specialization_level1?: string | null
      specialization_level2?: string | null
      keyword?: string | null
    } | null> | null
  }>
}

export type DisciplinesQueryVariables = Exact<{
  languageName: Scalars['String']['input']
  filter?: InputMaybe<Main_Taxonomy_Filter>
}>

export type DisciplinesQuery = {
  __typename?: 'Query'
  main_taxonomy: Array<{
    __typename?: 'main_taxonomy'
    id: string
    discipline_visualization?: boolean | null
    specialization_level1_visualization?: boolean | null
    specialization_level2_visualization?: boolean | null
    discipline?: {
      __typename?: 'taxonomy'
      id: string
      taxonomy_trans?: Array<{ __typename?: 'taxonomy_trans'; id: string; name?: string | null } | null> | null
    } | null
    specialization_level1?: {
      __typename?: 'taxonomy_level1'
      id: string
      taxonomy_level1_trans?: Array<{ __typename?: 'taxonomy_level1_trans'; id: string; name?: string | null } | null> | null
    } | null
    specialization_level2?: {
      __typename?: 'taxonomy_level2'
      id: string
      taxonomy_level2_trans?: Array<{ __typename?: 'taxonomy_level2_trans'; name?: string | null } | null> | null
    } | null
    courses?: Array<{
      __typename?: 'main_taxonomy_courses'
      courses_id?: { __typename?: 'courses'; id: string; id_mp?: string | null } | null
    } | null> | null
  }>
}

export type GetInstitutionsQueryVariables = Exact<{
  languageName: Scalars['String']['input']
  filter?: InputMaybe<Institutions_Filter>
  page?: InputMaybe<Scalars['Int']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
}>

export type GetInstitutionsQuery = {
  __typename?: 'Query'
  institutions: Array<{
    __typename?: 'institutions'
    institution?: Array<{
      __typename?: 'institutions_trans'
      commercial_name?: string | null
      intro?: string | null
      description?: string | null
      header_details?: any | null
      rank_and_rec?: any | null
      standsfor?: any | null
      institution_id?: {
        __typename?: 'institutions'
        url?: string | null
        logo?: string | null
        main_image?: string | null
        institutions_scholarships_courses?: Array<{
          __typename?: 'institutions_scholarships_courses'
          scholarships_id?: {
            __typename?: 'scholarships'
            description?: any | null
            academic_course?: string | null
            is_active?: boolean | null
            type?: string | null
            languages_id?: { __typename?: 'languages'; name?: string | null } | null
          } | null
        } | null> | null
        institution_campuses?: Array<{
          __typename?: 'campuses'
          street_address?: string | null
          city?: string | null
          country?: string | null
          postal_code?: string | null
          images?: string | null
          phone?: string | null
          type?: string | null
          state?: string | null
          campuses_trans?: Array<{
            __typename?: 'campuses_trans'
            intro?: string | null
            description?: string | null
            name?: string | null
          } | null> | null
        } | null> | null
        meta_type_tags?: Array<{
          __typename?: 'institutions_tag_institutions'
          tag_institutions_id?: { __typename?: 'tag_institutions'; name?: string | null } | null
        } | null> | null
        courses?: Array<{
          __typename?: 'joininstitutioncourse'
          course_id?: {
            __typename?: 'courses'
            tuition_price?: any | null
            is_official?: boolean | null
            id: string
            type: string
            duration?: string | null
            duration_class?: string | null
            meta_tags?: any | null
            images?: string | null
            course_trans?: Array<{ __typename?: 'courses_trans'; commercial_name?: string | null } | null> | null
            learning_format_id?: Array<{
              __typename?: 'courses_learning_format'
              learning_format_id?: { __typename?: 'learning_format'; format_name?: string | null } | null
            } | null> | null
          } | null
        } | null> | null
      } | null
    } | null> | null
  }>
}

export type IdInstitutionsQueryVariables = Exact<{ [key: string]: never }>

export type IdInstitutionsQuery = { __typename?: 'Query'; institutions: Array<{ __typename?: 'institutions'; id: string }> }

export type GetUniversityQueryVariables = Exact<{
  id: Scalars['ID']['input']
  languageName: Scalars['String']['input']
}>

export type GetUniversityQuery = {
  __typename?: 'Query'
  institutions_by_id?: {
    __typename?: 'institutions'
    institution?: Array<{
      __typename?: 'institutions_trans'
      commercial_name?: string | null
      intro?: string | null
      description?: string | null
      header_details?: any | null
      rank_and_rec?: any | null
      standsfor?: any | null
      header_title?: string | null
      header_rank_and_rec?: string | null
      header_standsfor?: string | null
      header_type_and_taxonomy?: string | null
      header_courses?: string | null
      header_scholarships?: string | null
      institution_id?: {
        __typename?: 'institutions'
        url?: string | null
        logo?: string | null
        main_image?: string | null
        institutions_scholarships_courses?: Array<{
          __typename?: 'institutions_scholarships_courses'
          scholarships_id?: {
            __typename?: 'scholarships'
            description?: any | null
            academic_course?: string | null
            is_active?: boolean | null
            type?: string | null
            languages_id?: { __typename?: 'languages'; name?: string | null } | null
          } | null
        } | null> | null
        institution_campuses?: Array<{
          __typename?: 'campuses'
          street_address?: string | null
          city?: string | null
          country?: string | null
          postal_code?: string | null
          images?: string | null
          phone?: string | null
          type?: string | null
          state?: string | null
          campuses_trans?: Array<{
            __typename?: 'campuses_trans'
            intro?: string | null
            description?: string | null
            name?: string | null
          } | null> | null
        } | null> | null
        meta_type_tags?: Array<{
          __typename?: 'institutions_tag_institutions'
          tag_institutions_id?: { __typename?: 'tag_institutions'; name?: string | null } | null
        } | null> | null
        courses?: Array<{
          __typename?: 'joininstitutioncourse'
          course_id?: {
            __typename?: 'courses'
            tuition_price?: any | null
            is_official?: boolean | null
            id: string
            type: string
            duration?: string | null
            duration_class?: string | null
            meta_tags?: any | null
            images?: string | null
            course_trans?: Array<{ __typename?: 'courses_trans'; commercial_name?: string | null } | null> | null
            learning_format_id?: Array<{
              __typename?: 'courses_learning_format'
              learning_format_id?: { __typename?: 'learning_format'; format_name?: string | null } | null
            } | null> | null
          } | null
        } | null> | null
      } | null
    } | null> | null
  } | null
}

export type GetScholarshipsQueryVariables = Exact<{
  languageName: Scalars['String']['input']
}>

export type GetScholarshipsQuery = {
  __typename?: 'Query'
  scholarships: Array<{
    __typename?: 'scholarships'
    id: string
    description?: any | null
    academic_course?: string | null
    is_active?: boolean | null
    type?: string | null
  }>
}

export type GetUsersWithSettingsQueryVariables = Exact<{
  filter?: InputMaybe<Users_Filter>
}>

export type GetUsersWithSettingsQuery = {
  __typename?: 'Query'
  users: Array<{
    __typename?: 'users'
    id: string
    first_name?: string | null
    family_name?: string | null
    family_name_2?: string | null
    middle_name?: string | null
    birth_date?: any | null
    postal_code?: string | null
    city?: string | null
    address?: string | null
    email?: string | null
    role?: string | null
  }>
}

export const CampusesInfoFragmentDoc = gql`
  fragment CampusesInfo on campuses {
    street_address
    city
    country
    postal_code
    images
    phone
    type
    state
    campuses_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
      intro
      description
      name
    }
  }
`
export const CourseCampusesFragmentDoc = gql`
  fragment CourseCampuses on courses {
    campuses_courses {
      campuses_id {
        ...CampusesInfo
      }
    }
  }
  ${CampusesInfoFragmentDoc}
`
export const InstitutionsTransAboutFragmentDoc = gql`
  fragment InstitutionsTransAbout on institutions_trans {
    intro
    description
    header_details
  }
`
export const InstitutionsTransHeadFragmentDoc = gql`
  fragment InstitutionsTransHead on institutions_trans {
    commercial_name
  }
`
export const ScholarshipsInfoFragmentDoc = gql`
  fragment ScholarshipsInfo on scholarships {
    description
    academic_course
    is_active
    type
  }
`
export const CoursesInstitutionFragmentDoc = gql`
  fragment CoursesInstitution on courses {
    institutions {
      institution_id {
        institutions_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
          ...InstitutionsTransAbout
          ...InstitutionsTransHead
        }
        logo
        main_image
        top_masters
        institutions_scholarships_courses {
          scholarships_id(filter: { languages_id: { name: { _eq: $languageName } } }) {
            ...ScholarshipsInfo
            enum
          }
        }
      }
    }
  }
  ${InstitutionsTransAboutFragmentDoc}
  ${InstitutionsTransHeadFragmentDoc}
  ${ScholarshipsInfoFragmentDoc}
`
export const CoursesInstitutionFilterFragmentDoc = gql`
  fragment CoursesInstitutionFilter on courses {
    institutions {
      institution_id {
        institutions_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
          ...InstitutionsTransHead
        }
        logo
        main_image
        top_masters
        institution_campuses {
          state
        }
      }
    }
  }
  ${InstitutionsTransHeadFragmentDoc}
`
export const CoursesLanguagesFragmentDoc = gql`
  fragment CoursesLanguages on courses {
    course_language(filter: { languages_format_id: { language_id: { name: { _eq: $languageName } } } }) {
      languages_format_id {
        name
      }
    }
  }
`
export const ProfileInfoFragmentDoc = gql`
  fragment ProfileInfo on profiles {
    content_title
    students
    target
    data
  }
`
export const CoursesProfilesFragmentDoc = gql`
  fragment CoursesProfiles on courses {
    profiles(filter: { language_id: { name: { _eq: $languageName } } }) {
      ...ProfileInfo
    }
  }
  ${ProfileInfoFragmentDoc}
`
export const CourseTransHeadFragmentDoc = gql`
  fragment CourseTransHead on courses_trans {
    commercial_name
    intro
    description
  }
`
export const CoursesTransInfoFragmentDoc = gql`
  fragment CoursesTransInfo on courses_trans {
    info_blocks
    methodology
  }
`
export const CourseTransTitleFragmentDoc = gql`
  fragment CourseTransTitle on courses_trans {
    header_title
    info_header
    reason_header
    course_syllabus
    format_schedules
    admissions
    title_career_opportunities
    pricing
    header_scholarships
  }
`
export const DisciplineInfoFragmentDoc = gql`
  fragment DisciplineInfo on disciplines {
    menu
    discipline_visualization
    specialization_level1_visualization
    specialization_level2_visualization
    visualization
    id
  }
`
export const DisciplineTransInfoFragmentDoc = gql`
  fragment DisciplineTransInfo on disciplines_trans {
    discipline
    specialization_level1
    specialization_level2
    keyword
  }
`
export const InstitutionsLocationsFragmentDoc = gql`
  fragment InstitutionsLocations on institutions {
    institution_campuses(filter: { campuses_trans: { language_id: { name: { _eq: $languageName } } } }) {
      ...CampusesInfo
    }
  }
  ${CampusesInfoFragmentDoc}
`
export const InstitutionsCoursesFragmentDoc = gql`
  fragment InstitutionsCourses on institutions {
    courses {
      course_id {
        course_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
          commercial_name
        }
        tuition_price
        is_official
        id
        type
        duration
        duration_class
        meta_tags
        learning_format_id {
          learning_format_id {
            format_name
          }
        }
        images
      }
    }
  }
`
export const InstitutionsHeadFragmentDoc = gql`
  fragment InstitutionsHead on institutions {
    url
    logo
    main_image
  }
`
export const InstitutionsScholarshipsFragmentDoc = gql`
  fragment InstitutionsScholarships on institutions {
    institutions_scholarships_courses(filter: { scholarships_id: { languages_id: { name: { _eq: $languageName } } } }) {
      scholarships_id {
        ...ScholarshipsInfo
        languages_id {
          name
        }
      }
    }
  }
  ${ScholarshipsInfoFragmentDoc}
`
export const InstitutionsTagsFragmentDoc = gql`
  fragment InstitutionsTags on institutions {
    meta_type_tags {
      tag_institutions_id {
        name
      }
    }
  }
`
export const InstitutionsTransRankAndRecFragmentDoc = gql`
  fragment InstitutionsTransRankAndRec on institutions_trans {
    rank_and_rec
  }
`
export const InstitutionsTransStandsForFragmentDoc = gql`
  fragment InstitutionsTransStandsFor on institutions_trans {
    standsfor
  }
`
export const InstitutionsTransTitlesFragmentDoc = gql`
  fragment InstitutionsTransTitles on institutions_trans {
    header_title
    header_rank_and_rec
    header_standsfor
    header_type_and_taxonomy
    header_courses
    header_scholarships
    header_details
  }
`
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
export const FilterCoursesDocument = gql`
  query FilterCourses($languageName: String!, $filter: courses_filter, $page: Int, $limit: Int, $sort: [String!]) {
    courses(filter: $filter, page: $page, limit: $limit, sort: $sort) {
      course_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
        commercial_name
        course_id {
          id
          type
          is_official
          ...CoursesLanguages
          duration_class
          duration
          tuition_price
          average_price
          places_available
          images
          start_date_func {
            year
            month
            day
          }
          start_date
          learning_format: learning_format_id {
            learning_format_id {
              format_name
            }
          }
          ...CoursesInstitutionFilter
          ...CourseCampuses
        }
      }
      main_taxonomy {
        main_taxonomy_id {
          discipline {
            id
          }
          discipline_visualization
          specialization_level1 {
            id
          }
          specialization_level2 {
            id
          }
          specialization_level1_visualization
          specialization_level2_visualization
        }
      }
    }
  }
  ${CoursesLanguagesFragmentDoc}
  ${CoursesInstitutionFilterFragmentDoc}
  ${CourseCampusesFragmentDoc}
`

/**
 * __useFilterCoursesQuery__
 *
 * To run a query within a React component, call `useFilterCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterCoursesQuery({
 *   variables: {
 *      languageName: // value for 'languageName'
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useFilterCoursesQuery(
  baseOptions: Apollo.QueryHookOptions<FilterCoursesQuery, FilterCoursesQueryVariables> &
    ({ variables: FilterCoursesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FilterCoursesQuery, FilterCoursesQueryVariables>(FilterCoursesDocument, options)
}
export function useFilterCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterCoursesQuery, FilterCoursesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FilterCoursesQuery, FilterCoursesQueryVariables>(FilterCoursesDocument, options)
}
export function useFilterCoursesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FilterCoursesQuery, FilterCoursesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<FilterCoursesQuery, FilterCoursesQueryVariables>(FilterCoursesDocument, options)
}
export type FilterCoursesQueryHookResult = ReturnType<typeof useFilterCoursesQuery>
export type FilterCoursesLazyQueryHookResult = ReturnType<typeof useFilterCoursesLazyQuery>
export type FilterCoursesSuspenseQueryHookResult = ReturnType<typeof useFilterCoursesSuspenseQuery>
export type FilterCoursesQueryResult = Apollo.QueryResult<FilterCoursesQuery, FilterCoursesQueryVariables>
export const GetCourseDocument = gql`
  query getCourse($id: ID!, $languageName: String!) {
    courses_by_id(id: $id) {
      course_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
        id
        ...CourseTransHead
        ...CoursesTransInfo
        ...CourseTransTitle
        standsfor
        course_structure
        schedules
        requirements
        career_opportunities
        tuition_price_comments
        course_id {
          id
          type
          is_official
          duration
          bilinguals: bilinguals_id {
            name
          }
          is_dual
          ects
          degree_type
          degree_id
          url
          is_on_demand
          application_date
          videos
          images
          tuition_price
          official_data_source
          learning_format: learning_format_id {
            learning_format_id {
              format_name
            }
          }
          learning_pace: learning_pace_id {
            learning_pace_id {
              pace_name
            }
          }
          careers_list
          duration_class
          meta_tags
          average_price
          ...CoursesLanguages
          start_date_func {
            year
            month
            day
          }
          start_date
          places_available
          end_date
          end_date_func {
            year
            month
            day
          }
          ...CoursesInstitution
          ...CoursesProfiles
          ...CourseCampuses
        }
      }
    }
  }
  ${CourseTransHeadFragmentDoc}
  ${CoursesTransInfoFragmentDoc}
  ${CourseTransTitleFragmentDoc}
  ${CoursesLanguagesFragmentDoc}
  ${CoursesInstitutionFragmentDoc}
  ${CoursesProfilesFragmentDoc}
  ${CourseCampusesFragmentDoc}
`

/**
 * __useGetCourseQuery__
 *
 * To run a query within a React component, call `useGetCourseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourseQuery({
 *   variables: {
 *      id: // value for 'id'
 *      languageName: // value for 'languageName'
 *   },
 * });
 */
export function useGetCourseQuery(
  baseOptions: Apollo.QueryHookOptions<GetCourseQuery, GetCourseQueryVariables> &
    ({ variables: GetCourseQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCourseQuery, GetCourseQueryVariables>(GetCourseDocument, options)
}
export function useGetCourseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCourseQuery, GetCourseQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCourseQuery, GetCourseQueryVariables>(GetCourseDocument, options)
}
export function useGetCourseSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCourseQuery, GetCourseQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetCourseQuery, GetCourseQueryVariables>(GetCourseDocument, options)
}
export type GetCourseQueryHookResult = ReturnType<typeof useGetCourseQuery>
export type GetCourseLazyQueryHookResult = ReturnType<typeof useGetCourseLazyQuery>
export type GetCourseSuspenseQueryHookResult = ReturnType<typeof useGetCourseSuspenseQuery>
export type GetCourseQueryResult = Apollo.QueryResult<GetCourseQuery, GetCourseQueryVariables>
export const IdCoursesDocument = gql`
  query IdCourses {
    courses {
      id
      institutions {
        id
      }
    }
  }
`

/**
 * __useIdCoursesQuery__
 *
 * To run a query within a React component, call `useIdCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useIdCoursesQuery(baseOptions?: Apollo.QueryHookOptions<IdCoursesQuery, IdCoursesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IdCoursesQuery, IdCoursesQueryVariables>(IdCoursesDocument, options)
}
export function useIdCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IdCoursesQuery, IdCoursesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IdCoursesQuery, IdCoursesQueryVariables>(IdCoursesDocument, options)
}
export function useIdCoursesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IdCoursesQuery, IdCoursesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<IdCoursesQuery, IdCoursesQueryVariables>(IdCoursesDocument, options)
}
export type IdCoursesQueryHookResult = ReturnType<typeof useIdCoursesQuery>
export type IdCoursesLazyQueryHookResult = ReturnType<typeof useIdCoursesLazyQuery>
export type IdCoursesSuspenseQueryHookResult = ReturnType<typeof useIdCoursesSuspenseQuery>
export type IdCoursesQueryResult = Apollo.QueryResult<IdCoursesQuery, IdCoursesQueryVariables>
export const TestCoursesDocument = gql`
  query testCourses($languageName: String!, $filter: courses_filter, $page: Int, $limit: Int, $sort: [String!]) {
    courses(filter: $filter, page: $page, limit: $limit, sort: $sort) {
      course_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
        commercial_name
        course_id {
          id
          type
          is_official
          course_language(filter: { languages_format_id: { language_id: { name: { _eq: $languageName } } } }) {
            languages_format_id {
              name
            }
          }
          duration_class
          duration
          tuition_price
          average_price
          places_available
          start_date_func {
            year
            month
            day
          }
          start_date
          institutions {
            institution_id {
              institutions_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
                commercial_name
              }
              logo
              main_image
              top_masters
            }
          }
        }
      }
      main_taxonomy {
        main_taxonomy_id {
          discipline {
            id
          }
          discipline_visualization
          specialization_level1 {
            id
          }
          specialization_level2 {
            id
          }
          specialization_level1_visualization
          specialization_level2_visualization
        }
      }
    }
  }
`

/**
 * __useTestCoursesQuery__
 *
 * To run a query within a React component, call `useTestCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestCoursesQuery({
 *   variables: {
 *      languageName: // value for 'languageName'
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTestCoursesQuery(
  baseOptions: Apollo.QueryHookOptions<TestCoursesQuery, TestCoursesQueryVariables> &
    ({ variables: TestCoursesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TestCoursesQuery, TestCoursesQueryVariables>(TestCoursesDocument, options)
}
export function useTestCoursesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestCoursesQuery, TestCoursesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TestCoursesQuery, TestCoursesQueryVariables>(TestCoursesDocument, options)
}
export function useTestCoursesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TestCoursesQuery, TestCoursesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<TestCoursesQuery, TestCoursesQueryVariables>(TestCoursesDocument, options)
}
export type TestCoursesQueryHookResult = ReturnType<typeof useTestCoursesQuery>
export type TestCoursesLazyQueryHookResult = ReturnType<typeof useTestCoursesLazyQuery>
export type TestCoursesSuspenseQueryHookResult = ReturnType<typeof useTestCoursesSuspenseQuery>
export type TestCoursesQueryResult = Apollo.QueryResult<TestCoursesQuery, TestCoursesQueryVariables>
export const GetDisciplinesDocument = gql`
  query GetDisciplines($languageName: String!) {
    disciplines {
      menu
      discipline_visualization
      id
      visualization
      specialization_level1_visualization
      specialization_level2_visualization
      discipline_trans(filter: { language: { name: { _eq: $languageName } } }) {
        discipline
        specialization_level1
        specialization_level2
        keyword
      }
    }
  }
`

/**
 * __useGetDisciplinesQuery__
 *
 * To run a query within a React component, call `useGetDisciplinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDisciplinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDisciplinesQuery({
 *   variables: {
 *      languageName: // value for 'languageName'
 *   },
 * });
 */
export function useGetDisciplinesQuery(
  baseOptions: Apollo.QueryHookOptions<GetDisciplinesQuery, GetDisciplinesQueryVariables> &
    ({ variables: GetDisciplinesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDisciplinesQuery, GetDisciplinesQueryVariables>(GetDisciplinesDocument, options)
}
export function useGetDisciplinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDisciplinesQuery, GetDisciplinesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDisciplinesQuery, GetDisciplinesQueryVariables>(GetDisciplinesDocument, options)
}
export function useGetDisciplinesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDisciplinesQuery, GetDisciplinesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetDisciplinesQuery, GetDisciplinesQueryVariables>(GetDisciplinesDocument, options)
}
export type GetDisciplinesQueryHookResult = ReturnType<typeof useGetDisciplinesQuery>
export type GetDisciplinesLazyQueryHookResult = ReturnType<typeof useGetDisciplinesLazyQuery>
export type GetDisciplinesSuspenseQueryHookResult = ReturnType<typeof useGetDisciplinesSuspenseQuery>
export type GetDisciplinesQueryResult = Apollo.QueryResult<GetDisciplinesQuery, GetDisciplinesQueryVariables>
export const DisciplinesDocument = gql`
  query Disciplines($languageName: String!, $filter: main_taxonomy_filter) {
    main_taxonomy(filter: $filter) {
      id
      discipline {
        taxonomy_trans(filter: { language: { name: { _eq: $languageName } } }) {
          id
          name
        }
        id
      }
      discipline_visualization
      specialization_level1 {
        taxonomy_level1_trans(filter: { language: { name: { _eq: $languageName } } }) {
          id
          name
        }
        id
      }
      specialization_level1_visualization
      specialization_level2 {
        taxonomy_level2_trans(filter: { language: { name: { _eq: $languageName } } }) {
          name
        }
        id
      }
      specialization_level2_visualization
      courses {
        courses_id {
          id
          id_mp
        }
      }
    }
  }
`

/**
 * __useDisciplinesQuery__
 *
 * To run a query within a React component, call `useDisciplinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDisciplinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDisciplinesQuery({
 *   variables: {
 *      languageName: // value for 'languageName'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDisciplinesQuery(
  baseOptions: Apollo.QueryHookOptions<DisciplinesQuery, DisciplinesQueryVariables> &
    ({ variables: DisciplinesQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DisciplinesQuery, DisciplinesQueryVariables>(DisciplinesDocument, options)
}
export function useDisciplinesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DisciplinesQuery, DisciplinesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DisciplinesQuery, DisciplinesQueryVariables>(DisciplinesDocument, options)
}
export function useDisciplinesSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<DisciplinesQuery, DisciplinesQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<DisciplinesQuery, DisciplinesQueryVariables>(DisciplinesDocument, options)
}
export type DisciplinesQueryHookResult = ReturnType<typeof useDisciplinesQuery>
export type DisciplinesLazyQueryHookResult = ReturnType<typeof useDisciplinesLazyQuery>
export type DisciplinesSuspenseQueryHookResult = ReturnType<typeof useDisciplinesSuspenseQuery>
export type DisciplinesQueryResult = Apollo.QueryResult<DisciplinesQuery, DisciplinesQueryVariables>
export const GetInstitutionsDocument = gql`
  query GetInstitutions($languageName: String!, $filter: institutions_filter, $page: Int, $limit: Int) {
    institutions(filter: $filter, page: $page, limit: $limit) {
      institution: institutions_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
        ...InstitutionsTransHead
        ...InstitutionsTransAbout
        ...InstitutionsTransRankAndRec
        ...InstitutionsTransStandsFor
        institution_id {
          ...InstitutionsHead
          ...InstitutionsScholarships
          ...InstitutionsLocations
          ...InstitutionsTags
          ...InstitutionsCourses
        }
      }
    }
  }
  ${InstitutionsTransHeadFragmentDoc}
  ${InstitutionsTransAboutFragmentDoc}
  ${InstitutionsTransRankAndRecFragmentDoc}
  ${InstitutionsTransStandsForFragmentDoc}
  ${InstitutionsHeadFragmentDoc}
  ${InstitutionsScholarshipsFragmentDoc}
  ${InstitutionsLocationsFragmentDoc}
  ${InstitutionsTagsFragmentDoc}
  ${InstitutionsCoursesFragmentDoc}
`

/**
 * __useGetInstitutionsQuery__
 *
 * To run a query within a React component, call `useGetInstitutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInstitutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInstitutionsQuery({
 *   variables: {
 *      languageName: // value for 'languageName'
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetInstitutionsQuery(
  baseOptions: Apollo.QueryHookOptions<GetInstitutionsQuery, GetInstitutionsQueryVariables> &
    ({ variables: GetInstitutionsQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetInstitutionsQuery, GetInstitutionsQueryVariables>(GetInstitutionsDocument, options)
}
export function useGetInstitutionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetInstitutionsQuery, GetInstitutionsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetInstitutionsQuery, GetInstitutionsQueryVariables>(GetInstitutionsDocument, options)
}
export function useGetInstitutionsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetInstitutionsQuery, GetInstitutionsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetInstitutionsQuery, GetInstitutionsQueryVariables>(GetInstitutionsDocument, options)
}
export type GetInstitutionsQueryHookResult = ReturnType<typeof useGetInstitutionsQuery>
export type GetInstitutionsLazyQueryHookResult = ReturnType<typeof useGetInstitutionsLazyQuery>
export type GetInstitutionsSuspenseQueryHookResult = ReturnType<typeof useGetInstitutionsSuspenseQuery>
export type GetInstitutionsQueryResult = Apollo.QueryResult<GetInstitutionsQuery, GetInstitutionsQueryVariables>
export const IdInstitutionsDocument = gql`
  query IdInstitutions {
    institutions {
      id
    }
  }
`

/**
 * __useIdInstitutionsQuery__
 *
 * To run a query within a React component, call `useIdInstitutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useIdInstitutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIdInstitutionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useIdInstitutionsQuery(baseOptions?: Apollo.QueryHookOptions<IdInstitutionsQuery, IdInstitutionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<IdInstitutionsQuery, IdInstitutionsQueryVariables>(IdInstitutionsDocument, options)
}
export function useIdInstitutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IdInstitutionsQuery, IdInstitutionsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<IdInstitutionsQuery, IdInstitutionsQueryVariables>(IdInstitutionsDocument, options)
}
export function useIdInstitutionsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<IdInstitutionsQuery, IdInstitutionsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<IdInstitutionsQuery, IdInstitutionsQueryVariables>(IdInstitutionsDocument, options)
}
export type IdInstitutionsQueryHookResult = ReturnType<typeof useIdInstitutionsQuery>
export type IdInstitutionsLazyQueryHookResult = ReturnType<typeof useIdInstitutionsLazyQuery>
export type IdInstitutionsSuspenseQueryHookResult = ReturnType<typeof useIdInstitutionsSuspenseQuery>
export type IdInstitutionsQueryResult = Apollo.QueryResult<IdInstitutionsQuery, IdInstitutionsQueryVariables>
export const GetUniversityDocument = gql`
  query getUniversity($id: ID!, $languageName: String!) {
    institutions_by_id(id: $id) {
      institution: institutions_trans(filter: { language_id: { name: { _eq: $languageName } } }) {
        ...InstitutionsTransHead
        ...InstitutionsTransAbout
        ...InstitutionsTransRankAndRec
        ...InstitutionsTransStandsFor
        ...InstitutionsTransTitles
        institution_id {
          ...InstitutionsHead
          ...InstitutionsScholarships
          ...InstitutionsLocations
          ...InstitutionsTags
          ...InstitutionsCourses
        }
      }
    }
  }
  ${InstitutionsTransHeadFragmentDoc}
  ${InstitutionsTransAboutFragmentDoc}
  ${InstitutionsTransRankAndRecFragmentDoc}
  ${InstitutionsTransStandsForFragmentDoc}
  ${InstitutionsTransTitlesFragmentDoc}
  ${InstitutionsHeadFragmentDoc}
  ${InstitutionsScholarshipsFragmentDoc}
  ${InstitutionsLocationsFragmentDoc}
  ${InstitutionsTagsFragmentDoc}
  ${InstitutionsCoursesFragmentDoc}
`

/**
 * __useGetUniversityQuery__
 *
 * To run a query within a React component, call `useGetUniversityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUniversityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUniversityQuery({
 *   variables: {
 *      id: // value for 'id'
 *      languageName: // value for 'languageName'
 *   },
 * });
 */
export function useGetUniversityQuery(
  baseOptions: Apollo.QueryHookOptions<GetUniversityQuery, GetUniversityQueryVariables> &
    ({ variables: GetUniversityQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUniversityQuery, GetUniversityQueryVariables>(GetUniversityDocument, options)
}
export function useGetUniversityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUniversityQuery, GetUniversityQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUniversityQuery, GetUniversityQueryVariables>(GetUniversityDocument, options)
}
export function useGetUniversitySuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUniversityQuery, GetUniversityQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUniversityQuery, GetUniversityQueryVariables>(GetUniversityDocument, options)
}
export type GetUniversityQueryHookResult = ReturnType<typeof useGetUniversityQuery>
export type GetUniversityLazyQueryHookResult = ReturnType<typeof useGetUniversityLazyQuery>
export type GetUniversitySuspenseQueryHookResult = ReturnType<typeof useGetUniversitySuspenseQuery>
export type GetUniversityQueryResult = Apollo.QueryResult<GetUniversityQuery, GetUniversityQueryVariables>
export const GetScholarshipsDocument = gql`
  query GetScholarships($languageName: String!) {
    scholarships(filter: { languages_id: { name: { _eq: $languageName } } }) {
      id
      ...ScholarshipsInfo
    }
  }
  ${ScholarshipsInfoFragmentDoc}
`

/**
 * __useGetScholarshipsQuery__
 *
 * To run a query within a React component, call `useGetScholarshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScholarshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetScholarshipsQuery({
 *   variables: {
 *      languageName: // value for 'languageName'
 *   },
 * });
 */
export function useGetScholarshipsQuery(
  baseOptions: Apollo.QueryHookOptions<GetScholarshipsQuery, GetScholarshipsQueryVariables> &
    ({ variables: GetScholarshipsQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetScholarshipsQuery, GetScholarshipsQueryVariables>(GetScholarshipsDocument, options)
}
export function useGetScholarshipsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetScholarshipsQuery, GetScholarshipsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetScholarshipsQuery, GetScholarshipsQueryVariables>(GetScholarshipsDocument, options)
}
export function useGetScholarshipsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetScholarshipsQuery, GetScholarshipsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetScholarshipsQuery, GetScholarshipsQueryVariables>(GetScholarshipsDocument, options)
}
export type GetScholarshipsQueryHookResult = ReturnType<typeof useGetScholarshipsQuery>
export type GetScholarshipsLazyQueryHookResult = ReturnType<typeof useGetScholarshipsLazyQuery>
export type GetScholarshipsSuspenseQueryHookResult = ReturnType<typeof useGetScholarshipsSuspenseQuery>
export type GetScholarshipsQueryResult = Apollo.QueryResult<GetScholarshipsQuery, GetScholarshipsQueryVariables>
export const GetUsersWithSettingsDocument = gql`
  query GetUsersWithSettings($filter: users_filter) {
    users(filter: $filter) {
      id
      first_name
      family_name
      family_name_2
      middle_name
      birth_date
      postal_code
      city
      address
      email
      role
    }
  }
`

/**
 * __useGetUsersWithSettingsQuery__
 *
 * To run a query within a React component, call `useGetUsersWithSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersWithSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersWithSettingsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetUsersWithSettingsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersWithSettingsQuery, GetUsersWithSettingsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersWithSettingsQuery, GetUsersWithSettingsQueryVariables>(GetUsersWithSettingsDocument, options)
}
export function useGetUsersWithSettingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUsersWithSettingsQuery, GetUsersWithSettingsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUsersWithSettingsQuery, GetUsersWithSettingsQueryVariables>(GetUsersWithSettingsDocument, options)
}
export function useGetUsersWithSettingsSuspenseQuery(
  baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersWithSettingsQuery, GetUsersWithSettingsQueryVariables>
) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUsersWithSettingsQuery, GetUsersWithSettingsQueryVariables>(GetUsersWithSettingsDocument, options)
}
export type GetUsersWithSettingsQueryHookResult = ReturnType<typeof useGetUsersWithSettingsQuery>
export type GetUsersWithSettingsLazyQueryHookResult = ReturnType<typeof useGetUsersWithSettingsLazyQuery>
export type GetUsersWithSettingsSuspenseQueryHookResult = ReturnType<typeof useGetUsersWithSettingsSuspenseQuery>
export type GetUsersWithSettingsQueryResult = Apollo.QueryResult<GetUsersWithSettingsQuery, GetUsersWithSettingsQueryVariables>
